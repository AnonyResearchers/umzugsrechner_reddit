// Utility to lookup city name from German PLZ (Postleitzahl)

interface PLZLookupResult {
  city: string | null;
  state: string | null;
}

// Cache to avoid repeated API calls
const plzCache = new Map<string, PLZLookupResult>();

/**
 * Look up city name from German postal code using Nominatim API
 * @param plz - 5-digit German postal code
 * @returns City name or null if not found
 */
export async function lookupCityFromPLZ(plz: string): Promise<PLZLookupResult> {
  // Validate PLZ format
  if (!/^\d{5}$/.test(plz)) {
    return { city: null, state: null };
  }

  // Check cache first
  if (plzCache.has(plz)) {
    return plzCache.get(plz)!;
  }

  try {
    // Use Nominatim API (OpenStreetMap)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${plz}&country=Germany&format=json&limit=1`,
      {
        headers: {
          'User-Agent': 'Umzugsrechner/1.0',
        },
      }
    );

    if (!response.ok) {
      return { city: null, state: null };
    }

    const data = await response.json();

    if (data && data.length > 0) {
      const result = data[0];
      const city = result.address?.city || result.address?.town || result.address?.village || result.display_name.split(',')[0];
      const state = result.address?.state || null;

      const lookupResult = {
        city: city || null,
        state: state || null,
      };

      // Cache the result
      plzCache.set(plz, lookupResult);

      return lookupResult;
    }

    return { city: null, state: null };
  } catch (error) {
    console.error('PLZ lookup failed:', error);
    return { city: null, state: null };
  }
}

/**
 * Debounce helper for PLZ input
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
