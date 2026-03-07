/**
 * Distance Calculation Utilities
 *
 * Calculates approximate route distances between German postal codes
 * using the Haversine formula for great-circle distance.
 */

import { plzCoordinates, type PLZCoordinates } from '../data/plz-coordinates';

type Coordinates = PLZCoordinates;

/**
 * Earth's radius in kilometers
 */
const EARTH_RADIUS_KM = 6371;

/**
 * Get coordinates for a German postal code
 *
 * @param plz - 5-digit German postal code
 * @returns Coordinates object or null if PLZ not found
 */
export function getCoordinatesForPLZ(plz: string): Coordinates | null {
  const data = plzCoordinates[plz];
  return data ?? null;
}

/**
 * Convert degrees to radians
 */
function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Calculate straight-line distance between two coordinates using Haversine formula
 *
 * Formula: a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 *          c = 2 ⋅ atan2( √a, √(1−a) )
 *          d = R ⋅ c
 *
 * @param lat1 - Latitude of first point
 * @param lon1 - Longitude of first point
 * @param lat2 - Latitude of second point
 * @param lon2 - Longitude of second point
 * @returns Distance in kilometers
 */
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const φ1 = degreesToRadians(lat1);
  const φ2 = degreesToRadians(lat2);
  const Δφ = degreesToRadians(lat2 - lat1);
  const Δλ = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
}

/**
 * Calculate straight-line distance between two German postal codes
 *
 * @param plz1 - First postal code
 * @param plz2 - Second postal code
 * @returns Distance in kilometers, or null if either PLZ not found
 */
export function calculateDistanceBetweenPLZ(
  plz1: string,
  plz2: string
): number | null {
  const coords1 = getCoordinatesForPLZ(plz1);
  const coords2 = getCoordinatesForPLZ(plz2);

  if (!coords1 || !coords2) {
    return null;
  }

  return haversineDistance(coords1.lat, coords1.lon, coords2.lat, coords2.lon);
}

/**
 * Calculate approximate driving distance by applying a detour factor
 * to the straight-line distance.
 *
 * Detour factors:
 * - Short distance (<50km): 1.3x (30% longer due to urban roads)
 * - Medium distance (50-200km): 1.25x (25% longer)
 * - Long distance (>200km): 1.2x (20% longer, mostly highways)
 *
 * @param plz1 - First postal code
 * @param plz2 - Second postal code
 * @returns Approximate driving distance in kilometers, or null if either PLZ not found
 */
export function calculateApproximateRouteDistance(
  plz1: string,
  plz2: string
): number | null {
  const straightLineDistance = calculateDistanceBetweenPLZ(plz1, plz2);

  if (straightLineDistance === null) {
    return null;
  }

  // Apply detour factor based on distance
  let detourFactor: number;
  if (straightLineDistance < 50) {
    detourFactor = 1.3; // Urban areas, more winding roads
  } else if (straightLineDistance < 200) {
    detourFactor = 1.25; // Mix of urban and highway
  } else {
    detourFactor = 1.2; // Mostly highways
  }

  return Math.round(straightLineDistance * detourFactor);
}

/**
 * Calculate total route distance for multiple stops
 *
 * @param plzList - Array of postal codes in order of stops
 * @returns Total approximate route distance in kilometers, or null if any PLZ not found
 */
export function calculateTotalRouteDistance(plzList: string[]): number | null {
  if (plzList.length < 2) {
    return 0;
  }

  let totalDistance = 0;

  for (let i = 0; i < plzList.length - 1; i++) {
    const plz1 = plzList[i];
    const plz2 = plzList[i + 1];

    // TypeScript noUncheckedIndexedAccess requires checking for undefined
    if (!plz1 || !plz2) {
      continue;
    }

    const segmentDistance = calculateApproximateRouteDistance(plz1, plz2);

    if (segmentDistance === null) {
      return null; // PLZ not found
    }

    totalDistance += segmentDistance;
  }

  return totalDistance;
}

/**
 * Validate if a PLZ exists in the database
 *
 * @param plz - Postal code to validate
 * @returns true if PLZ exists, false otherwise
 */
export function isValidPLZ(plz: string): boolean {
  return getCoordinatesForPLZ(plz) !== null;
}

/**
 * Get city name for a postal code
 *
 * @param plz - Postal code
 * @returns City name or null if not found
 */
export function getCityForPLZ(plz: string): string | null {
  const coords = getCoordinatesForPLZ(plz);
  return coords ? coords.city : null;
}
