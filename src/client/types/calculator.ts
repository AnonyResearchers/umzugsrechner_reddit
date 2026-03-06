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

// Room Types
export enum RoomType {
  WOHNZIMMER = 'wohnzimmer',
  SCHLAFZIMMER = 'schlafzimmer',
  KUECHE = 'kueche',
  BADEZIMMER = 'badezimmer',
  ARBEITSZIMMER = 'arbeitszimmer',
  KINDERZIMMER = 'kinderzimmer',
  KELLER = 'keller',
  ANDERE = 'andere',
}

// Furniture Categories
export enum FurnitureCategory {
  MOEBEL = 'moebel',          // Furniture
  KARTONS = 'kartons',        // Boxes
  ELEKTRO = 'elektro',        // Electronics
  PFLANZEN = 'pflanzen',      // Plants
  SONSTIGES = 'sonstiges',    // Other
}

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
  customName?: string;            // For "Andere" room type
  furnitureItems: FurnitureItem[];
}

// Furniture Item
export interface FurnitureItem {
  id: string;                     // UUID for React keys
  category: FurnitureCategory;
  name: string;
  quantity: number;
  volume?: number;                // m³ (optional, for price calculation)
  weight?: number;                // kg (optional)
}

// Service Options
export interface ServiceOptions {
  packService: boolean;           // Packservice
  mountingService: boolean;       // Montageservice
  cleaningService: boolean;       // Reinigungsservice
  storageService: boolean;        // Einlagerungsservice
  insuranceService: boolean;      // Versicherungsservice
}

// Disposal Information (Entsorgung)
export interface DisposalInfo {
  required: boolean;
  items: string[];                // List of items to dispose
  estimatedVolume?: number;       // m³
}

// Main Calculator Data
export interface CalculatorData {
  beladestellen: Location[];
  entladestellen: Location[];
  rooms: Room[];
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
