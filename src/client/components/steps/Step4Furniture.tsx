import { useState, useMemo } from 'react';
import { FiPlus, FiMinus, FiPackage } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { ROOM_TYPE_TO_DB_ID } from '../../types/calculator';
import { FURNITURE_ITEMS, getFurnitureForRoom } from '../../data/furniture';
import type { FurnitureItem } from '../../data/furniture';
import { formatRoomDisplayName } from '../../utils/roomFormatting';

export const Step4Furniture = () => {
  const {
    data,
    addFurnitureItem,
    updateFurnitureQuantity,
    removeFurnitureItem,
    addCustomFurnitureItem,
    updateCustomFurnitureQuantity,
    removeCustomFurnitureItem,
  } = useCalculatorStore();
  const { rooms, furnitureItems: selectedFurniture, customFurnitureItems } = data;

  // State for active room tab
  const [activeRoomId, setActiveRoomId] = useState<string | 'all'>(
    rooms.length > 0 && rooms[0] ? rooms[0].id : 'all'
  );

  // State for search filter
  const [searchQuery, setSearchQuery] = useState('');

  // State for custom furniture modal
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customWidth, setCustomWidth] = useState('');
  const [customLength, setCustomLength] = useState('');
  const [customHeight, setCustomHeight] = useState('');
  const [customError, setCustomError] = useState('');

  // Get furniture items for the active room with search filter
  const availableFurniture = useMemo(() => {
    let items: FurnitureItem[] = [];

    if (activeRoomId === 'all') {
      items = FURNITURE_ITEMS;
    } else {
      const room = rooms.find(r => r.id === activeRoomId);
      if (!room) return [];

      const roomDbId = ROOM_TYPE_TO_DB_ID[room.type];
      items = getFurnitureForRoom(roomDbId);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    return items;
  }, [activeRoomId, rooms, searchQuery]);

  // Get quantity for a furniture item
  const getFurnitureQuantity = (furnitureItemId: number): number => {
    const items = selectedFurniture.filter(f =>
      f.furnitureItemId === furnitureItemId &&
      (activeRoomId === 'all' || f.roomId === activeRoomId)
    );
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Handle increment
  const handleIncrement = (furnitureItemId: number) => {
    addFurnitureItem(furnitureItemId, activeRoomId === 'all' ? undefined : activeRoomId);
  };

  // Handle decrement
  const handleDecrement = (furnitureItemId: number) => {
    const item = selectedFurniture.find(f =>
      f.furnitureItemId === furnitureItemId &&
      (activeRoomId === 'all' || f.roomId === activeRoomId)
    );

    if (item) {
      if (item.quantity > 1) {
        updateFurnitureQuantity(item.id, item.quantity - 1);
      } else {
        removeFurnitureItem(item.id);
      }
    }
  };

  // Calculate volume from dimensions
  const calculatedVolume = useMemo(() => {
    const w = parseFloat(customWidth);
    const l = parseFloat(customLength);
    const h = parseFloat(customHeight);

    if (isNaN(w) || isNaN(l) || isNaN(h) || w <= 0 || l <= 0 || h <= 0) {
      return null;
    }

    // Calculate volume in liters: (cm³ / 1000)
    const volumeLiters = (w * l * h) / 1000;
    // Convert to m³ for display
    const volumeM3 = volumeLiters / 1000;

    return { liters: volumeLiters, m3: volumeM3 };
  }, [customWidth, customLength, customHeight]);

  // Handlers for custom furniture
  const handleAddCustomFurniture = () => {
    const trimmedName = customName.trim();

    if (!trimmedName) {
      setCustomError('Bitte geben Sie einen Namen ein.');
      return;
    }

    const w = parseFloat(customWidth);
    const l = parseFloat(customLength);
    const h = parseFloat(customHeight);

    if (!customWidth || !customLength || !customHeight || isNaN(w) || isNaN(l) || isNaN(h) || w <= 0 || l <= 0 || h <= 0) {
      setCustomError('Bitte geben Sie gültige Maße ein (Breite, Länge, Höhe in cm).');
      return;
    }

    // Calculate volume in liters
    const volumeLiters = (w * l * h) / 1000;

    addCustomFurnitureItem(trimmedName, volumeLiters, activeRoomId === 'all' ? undefined : activeRoomId);
    setCustomName('');
    setCustomWidth('');
    setCustomLength('');
    setCustomHeight('');
    setCustomError('');
    setShowCustomModal(false);
  };

  const handleCustomIncrement = (id: string) => {
    const item = customFurnitureItems.find(f => f.id === id);
    if (item) {
      updateCustomFurnitureQuantity(id, item.quantity + 1);
    }
  };

  const handleCustomDecrement = (id: string) => {
    const item = customFurnitureItems.find(f => f.id === id);
    if (item) {
      if (item.quantity > 1) {
        updateCustomFurnitureQuantity(id, item.quantity - 1);
      } else {
        removeCustomFurnitureItem(id);
      }
    }
  };

  // Calculate total items and volume
  const totalStats = useMemo(() => {
    let totalItems = 0;
    let totalVolumeLiters = 0;

    // Regular furniture
    selectedFurniture.forEach(selectedItem => {
      const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
      if (furnitureData) {
        totalItems += selectedItem.quantity;
        totalVolumeLiters += furnitureData.volumeLiters * selectedItem.quantity;
      }
    });

    // Custom furniture
    customFurnitureItems.forEach(customItem => {
      totalItems += customItem.quantity;
      totalVolumeLiters += customItem.volumeLiters * customItem.quantity;
    });

    return {
      totalItems,
      totalVolumeM3: (totalVolumeLiters / 1000).toFixed(2),
    };
  }, [selectedFurniture, customFurnitureItems]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Welche Möbel möchten Sie umziehen?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wählen Sie die Möbel und Gegenstände aus, die transportiert werden sollen
        </p>
      </div>

      {/* Room Tabs */}
      {rooms.length > 0 && (
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2 -mb-px">
            <button
              onClick={() => setActiveRoomId('all')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeRoomId === 'all'
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Alle Möbel
            </button>

            {rooms.map(room => (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeRoomId === room.id
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {formatRoomDisplayName(room)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Bar and Custom Furniture Button */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Möbel suchen... (z.B. Kleiderschrank, Sofa)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Custom Furniture Button */}
        <button
          onClick={() => setShowCustomModal(true)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <FiPlus size={18} />
          <span>Eigenes Möbel</span>
        </button>
      </div>

      {/* Furniture Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {availableFurniture.map(furniture => {
          const quantity = getFurnitureQuantity(furniture.id);

          return (
            <div
              key={furniture.id}
              className={`bg-white dark:bg-gray-800 border-2 rounded-lg p-4 transition-all ${
                quantity > 0
                  ? 'border-blue-500 dark:border-blue-400 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {/* Image */}
              <div className="aspect-square mb-3 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={furniture.imageUrl}
                  alt={furniture.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 line-clamp-2">
                {furniture.name}
              </h3>

              {/* Volume */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {(furniture.volumeLiters / 1000).toFixed(2)} m³
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => handleDecrement(furniture.id)}
                  disabled={quantity === 0}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                  aria-label="Verringern"
                >
                  <FiMinus size={16} />
                </button>

                <span className="text-xl font-bold text-gray-900 dark:text-white min-w-[2rem] text-center">
                  {quantity}
                </span>

                <button
                  onClick={() => handleIncrement(furniture.id)}
                  className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  aria-label="Erhöhen"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>
          );
        })}

        {/* Custom Furniture Items */}
        {customFurnitureItems
          .filter(item => activeRoomId === 'all' || item.roomId === activeRoomId)
          .map(customItem => (
            <div
              key={customItem.id}
              className="bg-white dark:bg-gray-800 border-2 border-green-500 dark:border-green-400 rounded-lg p-4 shadow-md relative"
            >
              {/* Custom Badge */}
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                Eigenes
              </div>

              {/* Placeholder Icon */}
              <div className="aspect-square mb-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center">
                <FiPackage size={48} className="text-green-600 dark:text-green-300" />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 line-clamp-2">
                {customItem.name}
              </h3>

              {/* Volume */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {(customItem.volumeLiters / 1000).toFixed(2)} m³
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => handleCustomDecrement(customItem.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  aria-label="Verringern"
                >
                  <FiMinus size={16} />
                </button>

                <span className="text-xl font-bold text-gray-900 dark:text-white min-w-[2rem] text-center">
                  {customItem.quantity}
                </span>

                <button
                  onClick={() => handleCustomIncrement(customItem.id)}
                  className="w-8 h-8 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  aria-label="Erhöhen"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Empty State */}
      {availableFurniture.length === 0 && (
        <div className="text-center py-12">
          <FiPackage size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Keine Möbel verfügbar
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {rooms.length === 0
              ? 'Bitte wählen Sie zuerst Räume in Schritt 3 aus.'
              : 'Für diesen Raumtyp sind keine Möbel verfügbar.'}
          </p>
        </div>
      )}

      {/* Summary Box */}
      {(selectedFurniture.length > 0 || customFurnitureItems.length > 0) && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Ausgewählte Möbel:
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {totalStats.totalItems}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Geschätztes Volumen:
            </span>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {totalStats.totalVolumeM3} m³
            </span>
          </div>
        </div>
      )}

      {/* Help Text */}
      {selectedFurniture.length === 0 && rooms.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💡 <strong>Tipp:</strong> Sie können Möbel aus allen Kategorien auswählen oder gezielt nach Raum filtern.
            Die Möbelauswahl ist optional - Sie können diesen Schritt auch überspringen.
          </p>
        </div>
      )}

      {/* Custom Furniture Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Eigenes Möbel hinzufügen
              </h3>
              <button
                onClick={() => {
                  setShowCustomModal(false);
                  setCustomName('');
                  setCustomWidth('');
                  setCustomLength('');
                  setCustomHeight('');
                  setCustomError('');
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {customError && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{customError}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Möbel Name
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="z.B. Antiker Schrank"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Maße (in Zentimetern)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Breite (B)
                    </label>
                    <input
                      type="number"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(e.target.value)}
                      placeholder="z.B. 80"
                      min="1"
                      step="1"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Länge (L)
                    </label>
                    <input
                      type="number"
                      value={customLength}
                      onChange={(e) => setCustomLength(e.target.value)}
                      placeholder="z.B. 120"
                      min="1"
                      step="1"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Höhe (H)
                    </label>
                    <input
                      type="number"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(e.target.value)}
                      placeholder="z.B. 200"
                      min="1"
                      step="1"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Formel: B × L × H (in cm)
                </p>
              </div>

              {/* Calculated Volume Display */}
              {calculatedVolume && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-900 dark:text-green-100">
                      Berechnetes Volumen:
                    </span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {calculatedVolume.m3.toFixed(2)} m³
                    </span>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                    ({calculatedVolume.liters.toFixed(0)} Liter)
                  </p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setShowCustomModal(false);
                    setCustomName('');
                    setCustomWidth('');
                    setCustomLength('');
                    setCustomHeight('');
                    setCustomError('');
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleAddCustomFurniture}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Hinzufügen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
