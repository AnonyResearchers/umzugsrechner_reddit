/**
 * Price Calculation Logic
 *
 * Calculates moving cost estimates based on:
 * - Distance between locations
 * - Number of floors and elevator availability
 * - LKW (truck) distance to property
 * - Furniture volume
 * - Additional services
 * - Disposal requirements
 * - Parking zone permits
 */

import type { CalculatorData, PriceEstimate } from '../types/calculator';
import { calculateTotalRouteDistance } from './distanceCalculation';
import { Etage, LKWDistance } from '../types/calculator';
import { FURNITURE_ITEMS } from '../data/furniture';

/**
 * Convert Etage enum to floor number
 */
function parseFloorNumber(etage: Etage): number {
  const floorMap: Record<Etage, number> = {
    [Etage.KELLER]: -1,
    [Etage.EG]: 0,
    [Etage.OG_1]: 1,
    [Etage.OG_2]: 2,
    [Etage.OG_3]: 3,
    [Etage.OG_4]: 4,
    [Etage.OG_4_PLUS]: 5, // Estimate for >4th floor
  };

  return floorMap[etage] || 0;
}

/**
 * Calculate estimated furniture volume from selected furniture items
 *
 * Looks up furniture catalog items and calculates volume based on quantity.
 * Returns total volume in cubic meters.
 */
function calculateTotalFurnitureVolume(data: CalculatorData): number {
  let totalVolumeCubicMeters = 0;

  // Calculate volume from selected catalog furniture items
  for (const selectedItem of data.furnitureItems) {
    const furnitureItem = FURNITURE_ITEMS.find(
      item => item.id === selectedItem.furnitureItemId
    );

    if (furnitureItem) {
      // Convert liters to cubic meters and multiply by quantity
      const volumeM3 = (furnitureItem.volumeLiters / 1000) * selectedItem.quantity;
      totalVolumeCubicMeters += volumeM3;
    }
  }

  // Calculate volume from custom furniture items
  for (const customItem of data.customFurnitureItems) {
    // Convert liters to cubic meters and multiply by quantity
    const volumeM3 = (customItem.volumeLiters / 1000) * customItem.quantity;
    totalVolumeCubicMeters += volumeM3;
  }

  return totalVolumeCubicMeters;
}

/**
 * Calculate price estimate for a moving job
 *
 * @param data - Calculator data containing all moving information
 * @returns Price breakdown and total estimate
 */
export function calculatePrice(data: CalculatorData): PriceEstimate {
  // 1. Base price (fixed starting cost)
  const basePrice = 500; // €500 base moving fee

  // 2. Distance-based pricing
  let distancePrice = 0;

  // Build ordered list of all stops (beladestellen + entladestellen)
  const allStops = [
    ...data.beladestellen.sort((a, b) => a.stopOrder - b.stopOrder),
    ...data.entladestellen.sort((a, b) => a.stopOrder - b.stopOrder),
  ];

  if (allStops.length >= 2) {
    const plzList = allStops.map(location => location.plz);
    const totalDistance = calculateTotalRouteDistance(plzList);

    if (totalDistance !== null) {
      // €1.50 per kilometer
      distancePrice = Math.round(totalDistance * 1.5);
    } else {
      // Fallback: Use simple estimation if PLZ lookup fails
      distancePrice = 100;
      console.warn('PLZ lookup failed, using fallback distance price');
    }
  }

  // 3. Floor/Elevator costs
  let floorPrice = 0;

  for (const location of allStops) {
    if (location.etage) {
      const floorNumber = parseFloorNumber(location.etage);

      // Charge for carrying items up/down floors without elevator
      if (!location.aufzugAvailable && floorNumber > 0) {
        // €30 per floor
        floorPrice += floorNumber * 30;
      }

      // Small elevator fee for high floors even with elevator
      if (location.aufzugAvailable && floorNumber >= 3) {
        floorPrice += 20; // Time surcharge for elevator use
      }
    }
  }

  // 4. LKW (truck) distance to property costs
  let lkwDistancePrice = 0;

  for (const location of allStops) {
    switch (location.lkwDistance) {
      case LKWDistance.OVER_50:
        lkwDistancePrice += 150; // €150 for long carry >50m
        break;
      case LKWDistance.TWENTY_ONE_TO_50:
        lkwDistancePrice += 75; // €75 for medium carry 21-50m
        break;
      case LKWDistance.ZERO_TO_20:
        // No extra charge for short distance
        break;
    }
  }

  // 5. Halteverbotszone (no-parking zone permit) costs
  const halteverbotszoneCount = allStops.filter(
    location => location.halteverbotszone
  ).length;
  const halteverbotszonePrice = halteverbotszoneCount * 150; // €150 per permit

  // 6. Furniture volume-based pricing
  const totalVolume = calculateTotalFurnitureVolume(data);
  const volumePrice = Math.round(totalVolume * 25); // €25 per m³

  // 7. Additional services
  let servicePrice = 0;

  if (data.services.packService) {
    servicePrice += 300; // Packing service
  }
  if (data.services.mountingService) {
    servicePrice += 200; // Furniture assembly/disassembly
  }
  if (data.services.cleaningService) {
    servicePrice += 250; // Cleaning service
  }
  if (data.services.storageService) {
    servicePrice += 150; // Storage service (monthly)
  }
  if (data.services.insuranceService) {
    servicePrice += 100; // Moving insurance
  }

  // 8. Disposal (Entsorgung) costs
  let disposalPrice = 0;

  if (data.disposal.required) {
    const disposalVolume = data.disposal.estimatedVolume || 2; // Default 2m³
    disposalPrice = Math.round(disposalVolume * 50); // €50 per m³
  }

  // Calculate total
  const totalPrice =
    basePrice +
    distancePrice +
    floorPrice +
    lkwDistancePrice +
    halteverbotszonePrice +
    volumePrice +
    servicePrice +
    disposalPrice;

  // Price range (±15% to account for variability)
  const priceRange = {
    min: Math.floor(totalPrice * 0.85),
    max: Math.ceil(totalPrice * 1.15),
  };

  return {
    basePrice,
    distancePrice,
    floorPrice: floorPrice + lkwDistancePrice, // Combine floor-related costs
    servicePrice,
    disposalPrice,
    halteverbotszone: halteverbotszonePrice,
    totalPrice: Math.round(totalPrice),
    priceRange,
  };
}

/**
 * Get a human-readable price breakdown as formatted text
 */
export function getPriceBreakdown(estimate: PriceEstimate): string {
  const lines = [
    `Grundpreis: €${estimate.basePrice}`,
    `Entfernungskosten: €${estimate.distancePrice}`,
    `Etagen & Tragstrecke: €${estimate.floorPrice}`,
    `Zusatzleistungen: €${estimate.servicePrice}`,
    `Entsorgung: €${estimate.disposalPrice}`,
    `Halteverbotszone: €${estimate.halteverbotszone}`,
    ``,
    `Gesamtpreis: €${estimate.totalPrice}`,
    `Preisspanne: €${estimate.priceRange.min} - €${estimate.priceRange.max}`,
  ];

  return lines.join('\n');
}
