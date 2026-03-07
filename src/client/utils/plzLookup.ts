// Utility to lookup city name from German PLZ (Postleitzahl)
// Uses local PLZ coordinates data - no API calls needed!

import { getCityForPLZ } from './distanceCalculation';

interface PLZLookupResult {
  city: string | null;
  state: string | null;
}

/**
 * Look up city name from German postal code using local data
 * @param plz - 5-digit German postal code
 * @returns City name or null if not found
 */
export async function lookupCityFromPLZ(plz: string): Promise<PLZLookupResult> {
  // Validate PLZ format
  if (!/^\d{5}$/.test(plz)) {
    return { city: null, state: null };
  }

  // Use local PLZ data (instant lookup, no API call needed)
  const city = getCityForPLZ(plz);

  return {
    city,
    state: null, // We don't have state data in our PLZ coordinates
  };
}

/**
 * Debounce helper for PLZ input
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
