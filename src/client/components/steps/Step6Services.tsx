import { useMemo } from 'react';
import { FiPlus, FiMinus, FiCheckCircle, FiPackage, FiTool } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { FURNITURE_ITEMS } from '../../data/furniture';

export const Step6Services = () => {
  const { data, updateServices } = useCalculatorStore();
  const { furnitureItems, services } = data;

  // Analyze furniture items to determine which services to show
  const serviceRequirements = useMemo(() => {
    let hasWardrobesOrBeds = false;
    let hasAppliancesToConnect = false;

    furnitureItems.forEach(selectedItem => {
      const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
      if (!furnitureData) return;

      const lowerName = furnitureData.name.toLowerCase();

      // Check for wardrobes (Kleiderschrank) or beds (Bett)
      if (lowerName.includes('kleiderschrank') || lowerName.includes('bett')) {
        hasWardrobesOrBeds = true;
      }

      // Check for washing machine (Waschmaschine) or dishwasher (Spülmaschine/Geschirrspüler)
      if (lowerName.includes('waschmaschine') || lowerName.includes('spülmaschine') || lowerName.includes('geschirrspüler')) {
        hasAppliancesToConnect = true;
      }
    });

    return {
      hasWardrobesOrBeds,
      hasAppliancesToConnect,
    };
  }, [furnitureItems]);

  const handleBoxQuantityChange = (type: 'umzugskartons' | 'kleiderboxen', delta: number) => {
    const currentValue = services[type];
    const newValue = Math.max(0, Math.min(999, currentValue + delta));
    updateServices({ [type]: newValue });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Zusatzleistungen
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wählen Sie die gewünschten Zusatzleistungen für Ihren Umzug
        </p>
      </div>

      {/* Assembly Service (Ab-/Aufbauen) - Only show if there are wardrobes or beds */}
      {serviceRequirements.hasWardrobesOrBeds && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FiTool className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Ab-/Aufbauen
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wir bauen Ihre Möbel (Kleiderschränke, Betten) fachgerecht ab und am neuen Standort wieder auf.
              </p>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={services.assemblyService}
                  onChange={(e) => updateServices({ assemblyService: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
                <span className="ml-3 text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white">
                  Möbel ab- und aufbauen
                </span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Connection Service (Abschließen/Anschließen) - Only show if there are appliances */}
      {serviceRequirements.hasAppliancesToConnect && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <FiCheckCircle className="text-green-600 dark:text-green-400" size={20} />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Abschließen/Anschließen
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wir schließen Ihre Waschmaschine und Spülmaschine fachgerecht ab und am neuen Standort wieder an.
              </p>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={services.connectionService}
                  onChange={(e) => updateServices({ connectionService: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
                <span className="ml-3 text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white">
                  Geräte abschließen und anschließen
                </span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Moving Boxes (Umzugskartons) - Always show */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <FiPackage className="text-orange-600 dark:text-orange-400" size={20} />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Umzugskartons
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Stabile Umzugskartons für den sicheren Transport Ihrer Gegenstände (ca. 60 Liter pro Karton).
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleBoxQuantityChange('umzugskartons', -1)}
                disabled={services.umzugskartons === 0}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                aria-label="Verringern"
              >
                <FiMinus size={20} />
              </button>

              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {services.umzugskartons}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Kartons
                </span>
              </div>

              <button
                onClick={() => handleBoxQuantityChange('umzugskartons', 1)}
                disabled={services.umzugskartons >= 999}
                className="w-10 h-10 flex items-center justify-center bg-orange-600 hover:bg-orange-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                aria-label="Erhöhen"
              >
                <FiPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wardrobe Boxes (Kleiderboxen) - Always show */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <FiPackage className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Kleiderboxen
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Spezielle Boxen mit Kleiderstange für knitterfreien Transport Ihrer Kleidung.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleBoxQuantityChange('kleiderboxen', -1)}
                disabled={services.kleiderboxen === 0}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                aria-label="Verringern"
              >
                <FiMinus size={20} />
              </button>

              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {services.kleiderboxen}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Boxen
                </span>
              </div>

              <button
                onClick={() => handleBoxQuantityChange('kleiderboxen', 1)}
                disabled={services.kleiderboxen >= 999}
                className="w-10 h-10 flex items-center justify-center bg-purple-600 hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                aria-label="Erhöhen"
              >
                <FiPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <FiCheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-blue-900 dark:text-blue-100">
            <p className="font-medium mb-1">Hinweis</p>
            <p className="text-blue-700 dark:text-blue-200">
              Alle angegebenen Leistungen sind optional. Sie können jederzeit zurückgehen und Ihre Auswahl anpassen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
