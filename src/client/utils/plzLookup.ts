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
    // Call our backend API instead of Nominatim directly (CSP restriction)
    const response = await fetch(`/api/plz/${plz}`);

    if (!response.ok) {
      console.error('PLZ API response not OK:', response.status);
      return { city: null, state: null };
    }

    const data = await response.json();

    const lookupResult = {
      city: data.city || null,
      state: data.state || null,
    };

    // Cache the result
    if (lookupResult.city) {
      plzCache.set(plz, lookupResult);
    }

    return lookupResult;
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
