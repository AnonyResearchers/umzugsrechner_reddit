/**
 * Price Calculation Logic
 *
 * Pricing Structure:
 * 1. Moving Service: Distance-based per m³ pricing + additional charges
 * 2. Disposal Service: Separate volume-based pricing (if required)
 *
 * Volume includes: furniture + moving boxes + clothes boxes
 * - 10 moving boxes = 1 m³
 * - 10 clothes boxes = 2.5 m³
 */

import type { CalculatorData, PriceEstimate } from '../types/calculator';
import { calculateTotalRouteDistance } from './distanceCalculation';
import { Etage } from '../types/calculator';
import { FURNITURE_ITEMS } from '../data/furniture';

/**
 * Convert Etage enum to floor number for pricing
 * Keller (basement) is treated as 1st floor for pricing
 */
function getFloorSurcharge(etage: Etage): number {
  const floorMap: Record<Etage, number> = {
    [Etage.KELLER]: 1,  // Basement = 1st floor for pricing
    [Etage.EG]: 0,      // Ground floor = no surcharge
    [Etage.OG_1]: 1,
    [Etage.OG_2]: 2,
    [Etage.OG_3]: 3,
    [Etage.OG_4]: 4,
    [Etage.OG_4_PLUS]: 5,
  };

  return floorMap[etage] || 0;
}

/**
 * Get base price per m³ based on distance
 * Returns { min, max } pricing
 */
function getBasePricePerCubicMeter(distance: number): { min: number; max: number } {
  if (distance <= 25) {
    return { min: 40, max: 50 };
  } else if (distance <= 50) {
    return { min: 45, max: 55 };
  } else if (distance <= 60) {
    return { min: 50, max: 60 };
  } else if (distance <= 80) {
    return { min: 55, max: 65 };
  } else if (distance <= 100) {
    return { min: 65, max: 75 };
  } else if (distance <= 200) {
    return { min: 80, max: 90 };
  } else {
    return { min: 90, max: 102 };
  }
}

/**
 * Calculate total volume for moving (furniture + boxes)
 * Returns volume in m³
 */
function calculateTotalMovingVolume(data: CalculatorData): number {
  let totalVolumeLiters = 0;

  // Furniture volume from catalog items
  data.furnitureItems.forEach(selectedItem => {
    const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
    if (furnitureData) {
      totalVolumeLiters += furnitureData.volumeLiters * selectedItem.quantity;
    }
  });

  // Custom furniture volume
  data.customFurnitureItems.forEach(customItem => {
    totalVolumeLiters += customItem.volumeLiters * customItem.quantity;
  });

  // Convert liters to m³
  let totalVolumeM3 = totalVolumeLiters / 1000;

  // Add moving boxes volume: 10 boxes = 1 m³
  totalVolumeM3 += data.services.umzugskartons / 10;

  // Add clothes boxes volume: 10 boxes = 2.5 m³
  totalVolumeM3 += (data.services.kleiderboxen / 10) * 2.5;

  return totalVolumeM3;
}

/**
 * Calculate total volume for disposal
 * Returns volume in m³
 */
function calculateTotalDisposalVolume(data: CalculatorData): number {
  let totalVolumeLiters = 0;

  // Disposal furniture from catalog
  data.disposal.furnitureItems.forEach(selectedItem => {
    const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
    if (furnitureData) {
      totalVolumeLiters += furnitureData.volumeLiters * selectedItem.quantity;
    }
  });

  // Custom disposal furniture
  data.disposal.customFurnitureItems.forEach(customItem => {
    totalVolumeLiters += customItem.volumeLiters * customItem.quantity;
  });

  return totalVolumeLiters / 1000; // Convert to m³
}

/**
 * Count total assembly/disassembly operations
 * Each furniture item that needs assembly counts as operations
 */
function countAssemblyOperations(data: CalculatorData): number {
  let operationCount = 0;

  data.furnitureItems.forEach(selectedItem => {
    const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
    if (furnitureData) {
      const name = furnitureData.name.toLowerCase();
      // Count wardrobes and beds
      if (name.includes('kleiderschrank') || name.includes('bett')) {
        operationCount += selectedItem.quantity;
      }
    }
  });

  return operationCount;
}

/**
 * Count total connection operations
 * Washing machines and dishwashers
 */
function countConnectionOperations(data: CalculatorData): number {
  let operationCount = 0;

  data.furnitureItems.forEach(selectedItem => {
    const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
    if (furnitureData) {
      const name = furnitureData.name.toLowerCase();
      // Count washing machines and dishwashers
      if (name.includes('waschmaschine') || name.includes('spülmaschine') || name.includes('geschirrspüler')) {
        operationCount += selectedItem.quantity;
      }
    }
  });

  return operationCount;
}

/**
 * Calculate price estimate for a moving job
 *
 * @param data - Calculator data containing all moving information
 * @returns Price breakdown with min/max estimates
 */
export function calculatePrice(data: CalculatorData): PriceEstimate {
  // Calculate total volumes
  const movingVolumeM3 = calculateTotalMovingVolume(data);
  const disposalVolumeM3 = data.disposal.required ? calculateTotalDisposalVolume(data) : 0;

  // Calculate distance
  const allStops = [
    ...data.beladestellen.sort((a, b) => a.stopOrder - b.stopOrder),
    ...data.entladestellen.sort((a, b) => a.stopOrder - b.stopOrder),
  ];
  const plzList = allStops.map(location => location.plz);
  const totalDistance = calculateTotalRouteDistance(plzList) || 0;

  // Get base price per m³ based on distance
  const basePricePerM3 = getBasePricePerCubicMeter(totalDistance);

  // ===== MOVING SERVICE PRICING =====

  // 1. Base price (volume × price per m³)
  const movingBasePriceMin = Math.round(movingVolumeM3 * basePricePerM3.min);
  const movingBasePriceMax = Math.round(movingVolumeM3 * basePricePerM3.max);

  // 2. Floor surcharges (€5/m³ per floor without elevator)
  let floorSurcharge = 0;
  allStops.forEach(location => {
    if (location.etage && !location.aufzugAvailable) {
      const floors = getFloorSurcharge(location.etage);
      if (floors > 0) {
        floorSurcharge += floors * 5 * movingVolumeM3; // €5 per m³ per floor
      }
    }
  });
  floorSurcharge = Math.round(floorSurcharge);

  // 3. Halteverbotszone (€150 per zone)
  const halteverbotszoneCount = allStops.filter(l => l.halteverbotszone).length;
  const halteverbotszonePrice = halteverbotszoneCount * 150;

  // 4. Assembly/Disassembly service (€15 per operation)
  let assemblyPrice = 0;
  if (data.services.assemblyService) {
    const operations = countAssemblyOperations(data);
    assemblyPrice = operations * 15;
  }

  // 5. Connection service (€15 per operation)
  let connectionPrice = 0;
  if (data.services.connectionService) {
    const operations = countConnectionOperations(data);
    connectionPrice = operations * 15;
  }

  const servicePrice = assemblyPrice + connectionPrice;

  // Calculate moving service total
  const movingTotalMin = movingBasePriceMin + floorSurcharge + halteverbotszonePrice + servicePrice;
  const movingTotalMax = movingBasePriceMax + floorSurcharge + halteverbotszonePrice + servicePrice;

  // ===== DISPOSAL SERVICE PRICING =====

  let disposalPriceMin = 0;
  let disposalPriceMax = 0;

  if (data.disposal.required && disposalVolumeM3 > 0) {
    // Base disposal price (€25-€35 per m³)
    disposalPriceMin = Math.round(disposalVolumeM3 * 25);
    disposalPriceMax = Math.round(disposalVolumeM3 * 35);

    // Floor surcharges for disposal (€3/m³ per floor without elevator)
    let disposalFloorSurcharge = 0;
    allStops.forEach(location => {
      if (location.etage && !location.aufzugAvailable) {
        const floors = getFloorSurcharge(location.etage);
        if (floors > 0) {
          disposalFloorSurcharge += floors * 3 * disposalVolumeM3; // €3 per m³ per floor
        }
      }
    });
    disposalFloorSurcharge = Math.round(disposalFloorSurcharge);

    disposalPriceMin += disposalFloorSurcharge;
    disposalPriceMax += disposalFloorSurcharge;
  }

  // ===== TOTAL =====

  const totalMin = movingTotalMin + disposalPriceMin;
  const totalMax = movingTotalMax + disposalPriceMax;

  return {
    // For backwards compatibility, store moving service prices in main fields
    basePrice: movingBasePriceMin,
    distancePrice: 0, // Not used in new pricing model
    floorPrice: floorSurcharge,
    servicePrice: servicePrice,
    disposalPrice: disposalPriceMin,
    halteverbotszone: halteverbotszonePrice,
    totalPrice: totalMin,
    priceRange: {
      min: totalMin,
      max: totalMax,
    },
    // Additional breakdown for detailed display
    movingVolumeM3,
    disposalVolumeM3,
    distance: totalDistance,
    movingPriceMin: movingTotalMin,
    movingPriceMax: movingTotalMax,
    disposalPriceMin,
    disposalPriceMax,
  };
}

/**
 * Generate a formatted message text for contacting moving companies
 */
export function generateContactMessage(data: CalculatorData, estimate: PriceEstimate): string {
  const { beladestellen, entladestellen } = data;

  // Build route description
  const fromLocations = beladestellen.map((l, i) =>
    `${i + 1}. ${l.plz}${l.etage ? ` (${l.etage}, ${l.aufzugAvailable ? 'mit Aufzug' : 'ohne Aufzug'})` : ''}`
  ).join(', ');

  const toLocations = entladestellen.map((l, i) =>
    `${i + 1}. ${l.plz}${l.etage ? ` (${l.etage}, ${l.aufzugAvailable ? 'mit Aufzug' : 'ohne Aufzug'})` : ''}`
  ).join(', ');

  const message = `Guten Tag,

ich interessiere mich für einen Umzug und würde gerne ein Angebot einholen.

UMZUGSDETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Von: ${fromLocations}
Nach: ${toLocations}
Entfernung: ca. ${estimate.distance} km

UMFANG:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Anzahl Zimmer: ${data.rooms.length}
Gesamtvolumen: ca. ${estimate.movingVolumeM3.toFixed(2)} m³
${data.services.umzugskartons > 0 ? `Umzugskartons: ${data.services.umzugskartons}\n` : ''}${data.services.kleiderboxen > 0 ? `Kleiderboxen: ${data.services.kleiderboxen}\n` : ''}
ZUSATZLEISTUNGEN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.services.assemblyService ? '✓ Möbelmontage (Ab-/Aufbauen)\n' : ''}${data.services.connectionService ? '✓ Geräte anschließen (Waschmaschine, Spülmaschine)\n' : ''}${beladestellen.some(l => l.halteverbotszone) || entladestellen.some(l => l.halteverbotszone) ? '✓ Halteverbotszone erforderlich\n' : ''}${data.disposal.required ? `✓ Entsorgung erforderlich (ca. ${estimate.disposalVolumeM3.toFixed(2)} m³)\n` : ''}
GESCHÄTZTE KOSTEN (aus Rechner):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Umzugsservice: €${estimate.movingPriceMin} - €${estimate.movingPriceMax}${data.disposal.required ? `\nEntsorgung: €${estimate.disposalPriceMin} - €${estimate.disposalPriceMax}` : ''}
Gesamtpreis: €${estimate.priceRange.min} - €${estimate.priceRange.max}

Ich würde mich über ein detailliertes Angebot freuen.

Mit freundlichen Grüßen`;

  return message;
}
