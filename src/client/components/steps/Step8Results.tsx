import { useState } from 'react';
import { useCalculatorStore } from '../../store/calculatorStore';
import { calculatePrice } from '../../utils/priceCalculation';
import { getCityForPLZ } from '../../utils/distanceCalculation';

export const Step8Results = () => {
  const { data } = useCalculatorStore();
  const [copied, setCopied] = useState(false);
  const [showRedditUrl, setShowRedditUrl] = useState(false);
  const [redditUrl, setRedditUrl] = useState('');

  // Calculate price estimate
  const estimate = calculatePrice(data);

  // Calculate difficulty score
  const calculateDifficulty = (): { level: string; score: number; color: string } => {
    let score = 0;

    // Distance factor
    if (estimate.distance > 300) score += 2;
    else if (estimate.distance > 100) score += 1;

    // Volume factor
    if (estimate.movingVolumeM3 > 30) score += 2;
    else if (estimate.movingVolumeM3 > 15) score += 1;

    // Floor factor (no elevator)
    const hasNoElevator = [...data.beladestellen, ...data.entladestellen].some(
      l => l.etage && !l.aufzugAvailable
    );
    if (hasNoElevator) score += 2;

    // Long carry distance
    const hasLongCarry = [...data.beladestellen, ...data.entladestellen].some(
      l => l.lkwDistance === '>50m'
    );
    if (hasLongCarry) score += 1;

    // Disposal adds complexity
    if (data.disposal.required && estimate.disposalVolumeM3 > 0) score += 1;

    // Determine level
    if (score >= 6) return { level: 'Sehr Schwer', score, color: 'text-red-600 dark:text-red-400' };
    if (score >= 4) return { level: 'Schwer', score, color: 'text-orange-600 dark:text-orange-400' };
    if (score >= 2) return { level: 'Mittel', score, color: 'text-yellow-600 dark:text-yellow-400' };
    return { level: 'Einfach', score, color: 'text-green-600 dark:text-green-400' };
  };

  const difficulty = calculateDifficulty();

  // Generate shareable summary
  const generateSummary = (): string => {
    const fromCities = data.beladestellen.map(l => getCityForPLZ(l.plz) || l.plz).join(', ');
    const toCities = data.entladestellen.map(l => getCityForPLZ(l.plz) || l.plz).join(', ');

    let summary = `🚚 Mein Umzug:\n`;
    summary += `Von: ${fromCities}\n`;
    summary += `Nach: ${toCities}\n`;
    summary += `Entfernung: ${estimate.distance} km\n`;
    summary += `Volumen: ${estimate.movingVolumeM3.toFixed(1)} m³\n`;
    if (data.disposal.required && estimate.disposalVolumeM3 > 0) {
      summary += `Entsorgung: ${estimate.disposalVolumeM3.toFixed(1)} m³\n`;
    }
    summary += `Schwierigkeit: ${difficulty.level}\n\n`;
    summary += `💰 Geschätzter Preis:\n`;
    summary += `${formatCurrency(estimate.priceRange.min)} - ${formatCurrency(estimate.priceRange.max)}\n\n`;
    summary += `Berechnet mit dem Umzugsrechner`;

    return summary;
  };

  // Handle copy summary
  const handleCopySummary = async () => {
    const summary = generateSummary();

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Fehler beim Kopieren. Bitte versuchen Sie es erneut.');
    }
  };

  // Generate Reddit discussion post
  const openRedditDiscussion = () => {
    const fromCities = data.beladestellen.map(l => getCityForPLZ(l.plz) || l.plz).join(', ');
    const toCities = data.entladestellen.map(l => getCityForPLZ(l.plz) || l.plz).join(', ');

    const title = encodeURIComponent(
      `Umzug ${fromCities} → ${toCities}: Ist ${formatCurrency(estimate.priceRange.min)}-${formatCurrency(estimate.priceRange.max)} realistisch?`
    );

    const body = encodeURIComponent(
      `Ich plane einen Umzug und würde gerne eure Meinung hören:\n\n` +
      `**Details:**\n` +
      `- Von: ${fromCities}\n` +
      `- Nach: ${toCities}\n` +
      `- Entfernung: ${estimate.distance} km\n` +
      `- Volumen: ${estimate.movingVolumeM3.toFixed(1)} m³\n` +
      `- Schwierigkeit: ${difficulty.level}\n\n` +
      `**Geschätzter Preis (aus Rechner):**\n` +
      `${formatCurrency(estimate.priceRange.min)} - ${formatCurrency(estimate.priceRange.max)}\n\n` +
      `Ist dieser Preis realistisch? Hat jemand Erfahrungen mit ähnlichen Umzügen?`
    );

    // Build Reddit URL
    const url = `https://www.reddit.com/r/de/submit?title=${title}&text=${body}`;

    // Try to open in new tab
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

      // If window.open() was blocked or failed
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.warn('Pop-up blocked or window.open() failed');
        // Show fallback with clickable link
        setRedditUrl(url);
        setShowRedditUrl(true);
      }
    } catch (err) {
      console.error('Failed to open Reddit:', err);
      // Show fallback with clickable link
      setRedditUrl(url);
      setShowRedditUrl(true);
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Ihre Umzugskosten-Schätzung
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Basierend auf Ihren Angaben
        </p>
      </div>

      {/* Price Breakdown Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
        {/* Moving Service Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Umzugsservice
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Gesamtvolumen:</span>
              <span className="font-medium">{estimate.movingVolumeM3.toFixed(2)} m³</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Entfernung:</span>
              <span className="font-medium">{estimate.distance} km</span>
            </div>
            {estimate.floorPrice > 0 && (
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Etagenzuschlag (ohne Aufzug):</span>
                <span className="font-medium">{formatCurrency(estimate.floorPrice)}</span>
              </div>
            )}
            {estimate.halteverbotszone > 0 && (
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Halteverbotszone:</span>
                <span className="font-medium">{formatCurrency(estimate.halteverbotszone)}</span>
              </div>
            )}
            {estimate.servicePrice > 0 && (
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Zusatzleistungen:</span>
                <span className="font-medium">{formatCurrency(estimate.servicePrice)}</span>
              </div>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span className="font-semibold text-gray-900 dark:text-white">
                Umzugsservice Gesamt:
              </span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                {formatCurrency(estimate.movingPriceMin)} - {formatCurrency(estimate.movingPriceMax)}
              </span>
            </div>
          </div>
        </div>

        {/* Disposal Service Section (if applicable) */}
        {data.disposal.required && estimate.disposalVolumeM3 > 0 && (
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Entsorgungsservice
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Entsorgungsvolumen:</span>
                <span className="font-medium">{estimate.disposalVolumeM3.toFixed(2)} m³</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Entsorgung Gesamt:
                </span>
                <span className="text-lg font-bold text-orange-600 dark:text-orange-400 whitespace-nowrap">
                  {formatCurrency(estimate.disposalPriceMin)} - {formatCurrency(estimate.disposalPriceMax)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Total Section */}
        <div className="pt-6 border-t-2 border-gray-300 dark:border-gray-600">
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Gesamtpreis
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(estimate.priceRange.min)}
              </span>
              <span className="text-xl font-bold text-gray-500 dark:text-gray-400">-</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(estimate.priceRange.max)}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Wichtiger Hinweis:</strong> Dies ist eine Schätzung basierend auf Ihren Angaben.
              Jeder Umzug hat seine eigenen Besonderheiten und der tatsächliche Preis kann variieren.
              Für ein verbindliches Angebot kontaktieren Sie bitte direkt ein Umzugsunternehmen.
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Score Card */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-1">
              Umzug-Schwierigkeit
            </h3>
            <p className={`text-2xl font-bold ${difficulty.color}`}>
              {difficulty.level}
            </p>
            <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
              Basiert auf Entfernung, Volumen, Etagen und Tragstrecke
            </p>
          </div>
          <div className="text-5xl">
            {difficulty.score >= 6 ? '😰' : difficulty.score >= 4 ? '😓' : difficulty.score >= 2 ? '😊' : '😎'}
          </div>
        </div>
      </div>

      {/* Community Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💬 Mit der Community teilen
        </h3>

        <div className="space-y-3">
          {/* Copy Summary Button */}
          <button
            onClick={handleCopySummary}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied ? '✓ Zusammenfassung kopiert!' : 'Zusammenfassung kopieren'}
          </button>

          {/* Discuss on Reddit Button */}
          <button
            onClick={openRedditDiscussion}
            className="w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
            Auf Reddit diskutieren
          </button>

          {/* Fallback: Show Reddit URL if window.open() failed */}
          {showRedditUrl && (
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded-lg p-4">
              <p className="text-sm text-orange-900 dark:text-orange-100 mb-2 font-medium">
                Pop-up wurde blockiert! Klicken Sie auf den Link unten:
              </p>
              <a
                href={redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 dark:text-orange-400 underline break-all hover:text-orange-800 dark:hover:text-orange-300"
              >
                Reddit-Diskussion öffnen →
              </a>
              <button
                onClick={() => setShowRedditUrl(false)}
                className="mt-2 text-xs text-orange-700 dark:text-orange-300 underline hover:no-underline"
              >
                Schließen
              </button>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
          <strong>Tipp:</strong> Teile dein Ergebnis mit der Community und frage nach Erfahrungen.
          Andere Nutzer können dir helfen, den Preis besser einzuschätzen.
        </p>
      </div>

      {/* Export Options - Hidden for now */}
      {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Daten exportieren
        </h3>
        <div className="space-y-3">
          <button
            onClick={handleJSONExport}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {jsonDownloaded ? 'JSON heruntergeladen!' : 'Als JSON herunterladen'}
          </button>

          <button
            onClick={handleCopyMessage}
            className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied ? 'Nachricht kopiert!' : 'Nachricht für Umzugsfirma kopieren'}
          </button>

          <button
            disabled
            className="w-full px-4 py-3 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2 opacity-60"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Als PDF exportieren (Bald verfügbar)
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p>
            <strong>Tipp:</strong> Nutzen Sie die kopierte Nachricht, um schnell und einfach
            Angebote von verschiedenen Umzugsfirmen einzuholen. Alle wichtigen Informationen
            sind bereits enthalten.
          </p>
        </div>
      </div> */}
    </div>
  );
};
