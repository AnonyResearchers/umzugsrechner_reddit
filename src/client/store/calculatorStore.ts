import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  CalculatorData,
  Location,
  Room,
  SelectedFurnitureItem,
  CustomFurnitureItem,
  ServiceOptions,
  DisposalInfo,
  PriceEstimate,
  WizardState,
  PropertyType,
  RoomType,
} from '../types/calculator';
import { LKWDistance } from '../types/calculator';
import { calculatePrice as calculatePriceEstimate } from '../utils/priceCalculation';

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
      lkwDistance: LKWDistance.ZERO_TO_20,
      halteverbotszone: false,
      stopOrder: 1,
    },
  ],
  entladestellen: [
    {
      id: generateId(),
      plz: '',
      propertyType: 'wohnung' as PropertyType,
      lkwDistance: LKWDistance.ZERO_TO_20,
      halteverbotszone: false,
      stopOrder: 2,
    },
  ],
  rooms: [],
  furnitureItems: [],
  customFurnitureItems: [],
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
  addFurnitureItem: (furnitureItemId: number, roomId?: string) => void;
  removeFurnitureItem: (id: string) => void;
  updateFurnitureQuantity: (id: string, quantity: number) => void;
  clearAllFurniture: () => void;

  // Custom Furniture
  addCustomFurnitureItem: (name: string, volumeLiters: number, roomId?: string) => void;
  removeCustomFurnitureItem: (id: string) => void;
  updateCustomFurnitureQuantity: (id: string, quantity: number) => void;

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
          lkwDistance: LKWDistance.ZERO_TO_20,
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
        const temp = newArray[index];
        const swapItem = newArray[newIndex];
        if (!temp || !swapItem) return;
        newArray[index] = swapItem;
        newArray[newIndex] = temp;

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
          lkwDistance: LKWDistance.ZERO_TO_20,
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
        const temp = newArray[index];
        const swapItem = newArray[newIndex];
        if (!temp || !swapItem) return;
        newArray[index] = swapItem;
        newArray[newIndex] = temp;

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
          ...(customName !== undefined && { customName }),
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
      addFurnitureItem: (furnitureItemId: number, roomId?: string) => {
        const { data } = get();
        // Check if this furniture item already exists
        const existing = data.furnitureItems.find(f => f.furnitureItemId === furnitureItemId && f.roomId === roomId);

        if (existing) {
          // Increment quantity
          set({
            data: {
              ...data,
              furnitureItems: data.furnitureItems.map(f =>
                f.id === existing.id
                  ? { ...f, quantity: f.quantity + 1 }
                  : f
              ),
              lastModified: new Date().toISOString(),
            },
            isDirty: true,
          });
        } else {
          // Add new item
          const newFurniture: SelectedFurnitureItem = {
            id: generateId(),
            furnitureItemId,
            quantity: 1,
            ...(roomId !== undefined && { roomId }),
          };
          set({
            data: {
              ...data,
              furnitureItems: [...data.furnitureItems, newFurniture],
              lastModified: new Date().toISOString(),
            },
            isDirty: true,
          });
        }
      },

      removeFurnitureItem: (id: string) => {
        const { data } = get();
        set({
          data: {
            ...data,
            furnitureItems: data.furnitureItems.filter(f => f.id !== id),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      updateFurnitureQuantity: (id: string, quantity: number) => {
        const { data } = get();
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          get().removeFurnitureItem(id);
        } else {
          set({
            data: {
              ...data,
              furnitureItems: data.furnitureItems.map(f =>
                f.id === id ? { ...f, quantity } : f
              ),
              lastModified: new Date().toISOString(),
            },
            isDirty: true,
          });
        }
      },

      clearAllFurniture: () => {
        const { data } = get();
        set({
          data: {
            ...data,
            furnitureItems: [],
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      // Custom Furniture
      addCustomFurnitureItem: (name: string, volumeLiters: number, roomId?: string) => {
        const { data } = get();
        const newCustomFurniture: CustomFurnitureItem = {
          id: generateId(),
          name,
          volumeLiters,
          quantity: 1,
          ...(roomId !== undefined && { roomId }),
        };
        set({
          data: {
            ...data,
            customFurnitureItems: [...data.customFurnitureItems, newCustomFurniture],
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      removeCustomFurnitureItem: (id: string) => {
        const { data } = get();
        set({
          data: {
            ...data,
            customFurnitureItems: data.customFurnitureItems.filter(f => f.id !== id),
            lastModified: new Date().toISOString(),
          },
          isDirty: true,
        });
      },

      updateCustomFurnitureQuantity: (id: string, quantity: number) => {
        const { data } = get();
        if (quantity <= 0) {
          get().removeCustomFurnitureItem(id);
        } else {
          set({
            data: {
              ...data,
              customFurnitureItems: data.customFurnitureItems.map(f =>
                f.id === id ? { ...f, quantity } : f
              ),
              lastModified: new Date().toISOString(),
            },
            isDirty: true,
          });
        }
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

      // Price calculation (uses real distance calculation)
      calculatePrice: (): PriceEstimate => {
        const { data } = get();
        return calculatePriceEstimate(data);
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
