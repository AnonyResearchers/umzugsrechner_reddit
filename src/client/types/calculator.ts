// Umzugsrechner TypeScript Type Definitions

// Property Types
export enum PropertyType {
  WOHNUNG = 'wohnung',
  HAUS = 'haus',
  LAGER = 'lager',
  BUERO = 'buero',
}

// Floor/Etage Types
export enum Etage {
  KELLER = 'keller',
  EG = 'eg',
  OG_1 = '1og',
  OG_2 = '2og',
  OG_3 = '3og',
  OG_4 = '4og',
  OG_4_PLUS = '>4og',
}

// LKW Distance from entrance
export enum LKWDistance {
  ZERO_TO_20 = '0-20m',
  TWENTY_ONE_TO_50 = '21-50m',
  OVER_50 = '>50m',
}

// Room Types (matching database structure with 14 room types)
export enum RoomType {
  WOHNZIMMER = 'wohnzimmer',           // ID: 1
  SCHLAFZIMMER = 'schlafzimmer',       // ID: 2
  KINDERZIMMER = 'kinderzimmer',       // ID: 3
  KUECHE = 'kueche',                   // ID: 4
  WOHN_ESSZIMMER = 'wohn-esszimmer',   // ID: 5
  BADEZIMMER = 'badezimmer',           // ID: 6
  GAESTEZIMMER = 'gaestezimmer',       // ID: 7
  ARBEITSZIMMER = 'arbeitszimmer',     // ID: 8 (Büro-/Arbeitszimmer)
  ANKLEIDEZIMMER = 'ankleidezimmer',   // ID: 9
  DIELE_FLUR = 'diele-flur',           // ID: 10
  BALKON = 'balkon',                   // ID: 11 (Balkon/Terasse)
  KELLER = 'keller',                   // ID: 12
  GARAGE = 'garage',                   // ID: 13 (Garage/Garten)
  ANDERE = 'andere',                   // ID: 14 (Sonstiges)
}

// Mapping from RoomType enum to database room IDs
export const ROOM_TYPE_TO_DB_ID: Record<RoomType, number> = {
  [RoomType.WOHNZIMMER]: 1,
  [RoomType.SCHLAFZIMMER]: 2,
  [RoomType.KINDERZIMMER]: 3,
  [RoomType.KUECHE]: 4,
  [RoomType.WOHN_ESSZIMMER]: 5,
  [RoomType.BADEZIMMER]: 6,
  [RoomType.GAESTEZIMMER]: 7,
  [RoomType.ARBEITSZIMMER]: 8,
  [RoomType.ANKLEIDEZIMMER]: 9,
  [RoomType.DIELE_FLUR]: 10,
  [RoomType.BALKON]: 11,
  [RoomType.KELLER]: 12,
  [RoomType.GARAGE]: 13,
  [RoomType.ANDERE]: 14,
};

// Location (Beladestelle or Entladestelle)
export interface Location {
  id: string;                     // UUID for React keys
  plz: string;                    // 5-digit postal code
  propertyType: PropertyType;
  etage?: Etage;                  // Optional: only for apartments
  aufzugAvailable?: boolean;      // Optional: only for apartments
  lkwDistance: LKWDistance;
  halteverbotszone: boolean;      // Parking zone required?
  stopOrder: number;              // Order in the route
}

// Room
export interface Room {
  id: string;                     // UUID for React keys
  type: RoomType;
  customName?: string;            // Optional custom name for any room type
  displayNumber?: number;         // Auto-assigned number for duplicate room types (2, 3, 4, etc.)
}

// Selected Furniture Item (user's selection with quantity)
export interface SelectedFurnitureItem {
  id: string;                     // UUID for React keys
  furnitureItemId: number;        // Reference to database furniture item ID
  quantity: number;               // How many of this item
  roomId?: string;                // Optional: which room this belongs to
}

// Custom Furniture Item (user-defined furniture not in database)
export interface CustomFurnitureItem {
  id: string;                     // UUID for React keys
  name: string;                   // Custom furniture name
  volumeLiters: number;           // Volume in liters
  quantity: number;               // How many of this item
  roomId?: string;                // Optional: which room this belongs to
}

// Service Options
export interface ServiceOptions {
  assemblyService: boolean;       // Ab-/Aufbauen (for wardrobes and beds)
  connectionService: boolean;     // Abschließen/Anschließen (for washing machines and dishwashers)
  umzugskartons: number;          // Moving boxes quantity
  kleiderboxen: number;           // Wardrobe boxes quantity
}

// Disposal Information (Entsorgung)
export interface DisposalInfo {
  required: boolean;
  furnitureItems: SelectedFurnitureItem[];  // Furniture items to dispose (no roomId)
  customFurnitureItems: CustomFurnitureItem[];  // Custom items to dispose (no roomId)
}

// Main Calculator Data
export interface CalculatorData {
  beladestellen: Location[];
  entladestellen: Location[];
  rooms: Room[];
  furnitureItems: SelectedFurnitureItem[];  // User's selected furniture with quantities
  customFurnitureItems: CustomFurnitureItem[];  // User-defined custom furniture
  services: ServiceOptions;
  disposal: DisposalInfo;
  createdAt: string;              // ISO timestamp
  lastModified: string;           // ISO timestamp
}

// Wizard State
export interface WizardState {
  currentStep: number;            // 1-8 (or 1-7 if no disposal)
  totalSteps: number;             // Dynamic based on disposal requirement
  data: CalculatorData;
  isValid: { [step: number]: boolean };
  isDirty: boolean;
}

// Price Estimate Breakdown
export interface PriceEstimate {
  basePrice: number;              // Base moving cost
  distancePrice: number;          // Distance-based cost (km)
  floorPrice: number;             // Etage/Aufzug/LKW distance costs
  servicePrice: number;           // Additional services
  disposalPrice: number;          // Entsorgung cost
  halteverbotszone: number;       // Parking zone cost
  totalPrice: number;             // Total estimated price
  priceRange: {                   // Price range (min/max)
    min: number;
    max: number;
  };
  // Additional breakdown for detailed display
  movingVolumeM3: number;         // Total volume for moving (m³)
  disposalVolumeM3: number;       // Total volume for disposal (m³)
  distance: number;               // Total route distance (km)
  movingPriceMin: number;         // Moving service minimum price
  movingPriceMax: number;         // Moving service maximum price
  disposalPriceMin: number;       // Disposal service minimum price
  disposalPriceMax: number;       // Disposal service maximum price
}

// Validation Errors
export interface ValidationErrors {
  [locationId: string]: {
    [field: string]: string;
  };
}

// Helper function types
export type LocationType = 'loading' | 'unloading';

// Form field props
export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  helpText?: string;
}
