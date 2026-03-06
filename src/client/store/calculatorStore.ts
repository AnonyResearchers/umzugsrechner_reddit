import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  CalculatorData,
  Location,
  Room,
  FurnitureItem,
  ServiceOptions,
  DisposalInfo,
  PriceEstimate,
  WizardState,
  PropertyType,
  RoomType,
} from '../types/calculator';

// Helper to generate UUID
const generateId = (): string => {
  return crypto.randomUUID();
};

// Initial data structure
const createInitialData = (): CalculatorData => ({
  beladestellen: [
    {
      id: generateId(),
      plz: '',
      propertyType: 'wohnung' as PropertyType,
      lkwDistance: '0-20m',
      halteverbotszone: false,
      stopOrder: 1,
    },
  ],
  entladestellen: [
    {
      id: generateId(),
      plz: '',
      propertyType: 'wohnung' as PropertyType,
      lkwDistance: '0-20m',
      halteverbotszone: false,
      stopOrder: 2,
    },
  ],
  rooms: [],
  services: {
    packService: false,
    mountingService: false,
    cleaningService: false,
    storageService: false,
    insuranceService: false,
  },
  disposal: {
    required: false,
    items: [],
  },
  createdAt: new Date().toISOString(),
  lastModified: new Date().toISOString(),
});

interface CalculatorStore extends WizardState {
  // Navigation
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;

  // Locations - Beladestellen
  addBeladestelle: () => void;
  removeBeladestelle: (id: string) => void;
  updateBeladestelle: (id: string, updates: Partial<Location>) => void;
  reorderBeladestelle: (id: string, direction: 'up' | 'down') => void;

  // Locations - Entladestellen
  addEntladestelle: () => void;
  removeEntladestelle: (id: string) => void;
  updateEntladestelle: (id: string, updates: Partial<Location>) => void;
  reorderEntladestelle: (id: string, direction: 'up' | 'down') => void;

  // Rooms
  addRoom: (type: RoomType, customName?: string) => void;
  removeRoom: (id: string) => void;
  updateRoom: (id: string, updates: Partial<Room>) => void;

  // Furniture
  addFurnitureToRoom: (roomId: string, furniture: Omit<FurnitureItem, 'id'>) => void;
  removeFurnitureFromRoom: (roomId: string, furnitureId: string) => void;
  updateFurniture: (roomId: string, furnitureId: string, updates: Partial<FurnitureItem>) => void;

  // Services
  updateServices: (services: Partial<ServiceOptions>) => void;

  // Disposal
  updateDisposal: (disposal: Partial<DisposalInfo>) => void;

  // Validation
  validateStep: (step: number) => boolean;
  markStepValid: (step: number, valid: boolean) => void;

  // Persistence
  saveToBackend: () => Promise<void>;
  loadFromBackend: () => Promise<void>;

  // Export
  exportToJSON: () => string;

  // Price calculation (will implement logic later)
  calculatePrice: () => PriceEstimate;

  // Reset
  reset: () => void;
}

export const useCalculatorStore = create<CalculatorStore>()(
  persist(
    (set, get) => ({
      // Initial state
      currentStep: 1,
      totalSteps: 8,
      data: createInitialData(),
      isValid: {},
      isDirty: false,

      // Navigation
      setStep: (step: number) => {
        const { totalSteps } = get();
        if (step >= 1 && step <= totalSteps) {
          set({ currentStep: step });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps } = get();
        if (currentStep < totalSteps) {
          set({ currentStep: currentStep + 1 });
        }
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      goToStep: (step: number) => {
        get().setStep(step);
      },

      // Beladestellen
      addBeladestelle: () => {
        const { data } = get();
        const maxOrder = Math.max(...[...data.beladestellen, ...data.entladestellen].map(l => l.stopOrder), 0);
        const newLocation: Location = {
          id: generateId(),
          plz: '',
          propertyType: 'wohnung' as PropertyType,
          lkwDistance: '0-20m',
          halteverbotszone: false,
          stopOrder: maxOrder + 1,
        };
        set({
          data: {
            ...data,
            beladestellen: [...data.beladestellen, newLocation],
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      removeBeladestelle: (id: string) => {
        const { data } = get();
        if (data.beladestellen.length === 1) return; // Must have at least one
        set({
          data: {
            ...data,
            beladestellen: data.beladestellen.filter(l => l.id !== id),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      updateBeladestelle: (id: string, updates: Partial<Location>) => {
        const { data } = get();
        set({
          data: {
            ...data,
            beladestellen: data.beladestellen.map(l =>
              l.id === id ? { ...l, ...updates } : l
            ),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      reorderBeladestelle: (id: string, direction: 'up' | 'down') => {
        const { data } = get();
        const index = data.beladestellen.findIndex(l => l.id === id);
        if (index === -1) return;

        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= data.beladestellen.length) return;

        const newArray = [...data.beladestellen];
        [newArray[index], newArray[newIndex]] = [newArray[newIndex], newArray[index]];

        // Update stop orders
        newArray.forEach((location, idx) => {
          location.stopOrder = idx + 1;
        });

        set({
          data: {
            ...data,
            beladestellen: newArray,
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      // Entladestellen
      addEntladestelle: () => {
        const { data } = get();
        const maxOrder = Math.max(...[...data.beladestellen, ...data.entladestellen].map(l => l.stopOrder), 0);
        const newLocation: Location = {
          id: generateId(),
          plz: '',
          propertyType: 'wohnung' as PropertyType,
          lkwDistance: '0-20m',
          halteverbotszone: false,
          stopOrder: maxOrder + 1,
        };
        set({
          data: {
            ...data,
            entladestellen: [...data.entladestellen, newLocation],
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      removeEntladestelle: (id: string) => {
        const { data } = get();
        if (data.entladestellen.length === 1) return; // Must have at least one
        set({
          data: {
            ...data,
            entladestellen: data.entladestellen.filter(l => l.id !== id),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      updateEntladestelle: (id: string, updates: Partial<Location>) => {
        const { data } = get();
        set({
          data: {
            ...data,
            entladestellen: data.entladestellen.map(l =>
              l.id === id ? { ...l, ...updates } : l
            ),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      reorderEntladestelle: (id: string, direction: 'up' | 'down') => {
        const { data } = get();
        const index = data.entladestellen.findIndex(l => l.id === id);
        if (index === -1) return;

        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= data.entladestellen.length) return;

        const newArray = [...data.entladestellen];
        [newArray[index], newArray[newIndex]] = [newArray[newIndex], newArray[index]];

        // Update stop orders
        const beladeCount = data.beladestellen.length;
        newArray.forEach((location, idx) => {
          location.stopOrder = beladeCount + idx + 1;
        });

        set({
          data: {
            ...data,
            entladestellen: newArray,
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      // Rooms
      addRoom: (type: RoomType, customName?: string) => {
        const { data } = get();
        const newRoom: Room = {
          id: generateId(),
          type,
          customName,
          furnitureItems: [],
        };
        set({
          data: {
            ...data,
            rooms: [...data.rooms, newRoom],
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      removeRoom: (id: string) => {
        const { data } = get();
        set({
          data: {
            ...data,
            rooms: data.rooms.filter(r => r.id !== id),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      updateRoom: (id: string, updates: Partial<Room>) => {
        const { data } = get();
        set({
          data: {
            ...data,
            rooms: data.rooms.map(r =>
              r.id === id ? { ...r, ...updates } : r
            ),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      // Furniture
      addFurnitureToRoom: (roomId: string, furniture: Omit<FurnitureItem, 'id'>) => {
        const { data } = get();
        const newFurniture: FurnitureItem = {
          ...furniture,
          id: generateId(),
        };
        set({
          data: {
            ...data,
            rooms: data.rooms.map(r =>
              r.id === roomId
                ? { ...r, furnitureItems: [...r.furnitureItems, newFurniture] }
                : r
            ),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      removeFurnitureFromRoom: (roomId: string, furnitureId: string) => {
        const { data } = get();
        set({
          data: {
            ...data,
            rooms: data.rooms.map(r =>
              r.id === roomId
                ? { ...r, furnitureItems: r.furnitureItems.filter(f => f.id !== furnitureId) }
                : r
            ),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      updateFurniture: (roomId: string, furnitureId: string, updates: Partial<FurnitureItem>) => {
        const { data } = get();
        set({
          data: {
            ...data,
            rooms: data.rooms.map(r =>
              r.id === roomId
                ? {
                    ...r,
                    furnitureItems: r.furnitureItems.map(f =>
                      f.id === furnitureId ? { ...f, ...updates } : f
                    ),
                  }
                : r
            ),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      // Services
      updateServices: (services: Partial<ServiceOptions>) => {
        const { data } = get();
        set({
          data: {
            ...data,
            services: { ...data.services, ...services },
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      // Disposal
      updateDisposal: (disposal: Partial<DisposalInfo>) => {
        const { data } = get();
        const newDisposal = { ...data.disposal, ...disposal };

        // Update total steps based on disposal requirement
        const newTotalSteps = newDisposal.required ? 8 : 7;

        set({
          data: {
            ...data,
            disposal: newDisposal,
            lastModified: new Date().toISOString(),
          },
          totalSteps: newTotalSteps,
          isDirty: true,
        });
      },

      // Validation
      validateStep: (step: number): boolean => {
        const { data } = get();

        switch (step) {
          case 1: // Beladestellen
            return data.beladestellen.length > 0 &&
              data.beladestellen.every(l => l.plz.length === 5);

          case 2: // Entladestellen
            return data.entladestellen.length > 0 &&
              data.entladestellen.every(l => l.plz.length === 5);

          case 3: // Rooms
            return data.rooms.length > 0;

          case 4: // Furniture (optional, always valid)
            return true;

          case 5: // Services (optional, always valid)
            return true;

          case 6: // Entsorgung
            if (!data.disposal.required) return true;
            return data.disposal.items.length > 0;

          case 7: // Verification (requires user confirmation in UI)
            return true;

          case 8: // Results (always valid)
            return true;

          default:
            return false;
        }
      },

      markStepValid: (step: number, valid: boolean) => {
        const { isValid } = get();
        set({
          isValid: { ...isValid, [step]: valid },
        });
      },

      // Persistence
      saveToBackend: async () => {
        const { data } = get();
        try {
          const response = await fetch('/api/calculator/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error('Failed to save data');
          }

          set({ isDirty: false });
        } catch (error) {
          console.error('Failed to save to backend:', error);
        }
      },

      loadFromBackend: async () => {
        try {
          const response = await fetch('/api/calculator/load');

          if (response.ok) {
            const data = await response.json();
            set({ data, isDirty: false });
          }
        } catch (error) {
          console.error('Failed to load from backend:', error);
        }
      },

      // Export
      exportToJSON: (): string => {
        const { data } = get();
        return JSON.stringify(data, null, 2);
      },

      // Price calculation (basic implementation)
      calculatePrice: (): PriceEstimate => {
        const { data } = get();

        // Simple price calculation (will be enhanced later)
        const basePrice = 500;
        const distancePrice = 100; // Placeholder
        const floorPrice = 50; // Placeholder
        const servicePrice = Object.values(data.services).filter(Boolean).length * 100;
        const disposalPrice = data.disposal.required ? 200 : 0;
        const halteverbotszone = [...data.beladestellen, ...data.entladestellen]
          .filter(l => l.halteverbotszone).length * 150;

        const totalPrice = basePrice + distancePrice + floorPrice + servicePrice + disposalPrice + halteverbotszone;

        return {
          basePrice,
          distancePrice,
          floorPrice,
          servicePrice,
          disposalPrice,
          halteverbotszone,
          totalPrice,
          priceRange: {
            min: Math.floor(totalPrice * 0.85),
            max: Math.ceil(totalPrice * 1.15),
          },
        };
      },

      // Reset
      reset: () => {
        set({
          currentStep: 1,
          totalSteps: 8,
          data: createInitialData(),
          isValid: {},
          isDirty: false,
        });
      },
    }),
    {
      name: 'umzugsrechner-storage',
      partialize: (state) => ({
        data: state.data,
        currentStep: state.currentStep,
        totalSteps: state.totalSteps,
        isValid: state.isValid,
      }),
    }
  )
);
