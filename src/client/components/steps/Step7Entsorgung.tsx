import { useState, useMemo } from 'react';
import { FiPlus, FiMinus, FiTrash2, FiX, FiAlertCircle } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { FURNITURE_ITEMS } from '../../data/furniture';
import type { FurnitureItem } from '../../data/furniture';

export const Step7Entsorgung = () => {
  const {
    data,
    updateDisposal,
    addDisposalFurniture,
    removeDisposalFurniture,
    updateDisposalFurnitureQuantity,
    addCustomDisposalFurniture,
    removeCustomDisposalFurniture,
    updateCustomDisposalFurniture,
  } = useCalculatorStore();
  const { disposal } = data;

  // State for search filter
  const [searchQuery, setSearchQuery] = useState('');

  // State for custom furniture modal
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customWidth, setCustomWidth] = useState('');
  const [customLength, setCustomLength] = useState('');
  const [customHeight, setCustomHeight] = useState('');
  const [customError, setCustomError] = useState('');

  // Filter furniture by search query
  const availableFurniture = useMemo(() => {
    let items: FurnitureItem[] = FURNITURE_ITEMS;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    return items;
  }, [searchQuery]);

  // Calculate total volume from selected furniture
  const totalVolume = useMemo(() => {
    let totalLiters = 0;

    disposal.furnitureItems.forEach(selectedItem => {
      const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
      if (furnitureData) {
        totalLiters += furnitureData.volumeLiters * selectedItem.quantity;
      }
    });

    disposal.customFurnitureItems.forEach(customItem => {
      totalLiters += customItem.volumeLiters * customItem.quantity;
    });

    return (totalLiters / 1000).toFixed(2); // Convert to m³
  }, [disposal.furnitureItems, disposal.customFurnitureItems]);

  // Get quantity for a furniture item
  const getFurnitureQuantity = (furnitureItemId: number): number => {
    const item = disposal.furnitureItems.find(f => f.furnitureItemId === furnitureItemId);
    return item ? item.quantity : 0;
  };

  // Handle increment
  const handleIncrement = (furnitureItemId: number) => {
    addDisposalFurniture(furnitureItemId, 1);
  };

  // Handle decrement
  const handleDecrement = (furnitureItemId: number) => {
    const item = disposal.furnitureItems.find(f => f.furnitureItemId === furnitureItemId);
    if (item) {
      if (item.quantity === 1) {
        removeDisposalFurniture(item.id);
      } else {
        updateDisposalFurnitureQuantity(item.id, item.quantity - 1);
      }
    }
  };

  // Handle custom furniture add
  const handleAddCustomFurniture = () => {
    setCustomError('');

    if (!customName.trim()) {
      setCustomError('Bitte geben Sie einen Namen ein');
      return;
    }

    const width = parseFloat(customWidth);
    const length = parseFloat(customLength);
    const height = parseFloat(customHeight);

    if (isNaN(width) || isNaN(length) || isNaN(height) || width <= 0 || length <= 0 || height <= 0) {
      setCustomError('Bitte geben Sie gültige Maße ein');
      return;
    }

    // Calculate volume in liters (cm³ to liters)
    const volumeLiters = (width * length * height) / 1000;

    addCustomDisposalFurniture(customName.trim(), volumeLiters, 1);

    // Reset form
    setCustomName('');
    setCustomWidth('');
    setCustomLength('');
    setCustomHeight('');
    setShowCustomModal(false);
  };

  const handleToggleDisposal = (required: boolean) => {
    if (required) {
      updateDisposal({ required });
    } else {
      updateDisposal({
        required,
        furnitureItems: [],
        customFurnitureItems: [],
      });
    }
  };

  const totalItemCount = disposal.furnitureItems.reduce((sum, item) => sum + item.quantity, 0) +
    disposal.customFurnitureItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Entsorgung
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wählen Sie die Möbel aus, die entsorgt werden sollen
        </p>
      </div>

      {/* Disposal Required Toggle */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={disposal.required}
            onChange={(e) => handleToggleDisposal(e.target.checked)}
            className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-orange-600"
          />
          <div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Ja, ich benötige Entsorgungsservice
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Wir entsorgen Ihre alten Möbel und Gegenstände fachgerecht
            </p>
          </div>
        </label>
      </div>

      {/* Furniture Selection - Only show if required */}
      {disposal.required && (
        <>
          {/* Info Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex gap-3">
              <FiAlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  Hinweis zur Entsorgung
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Wählen Sie aus der Liste die Möbel aus, die entsorgt werden sollen. Das Volumen wird automatisch berechnet.
                </p>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          {totalItemCount > 0 && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <div className="text-sm font-medium text-orange-900 dark:text-orange-100 mb-1">
                  Gegenstände
                </div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {totalItemCount}
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-1">
                  Geschätztes Volumen
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {totalVolume} m³
                </div>
              </div>
            </div>
          )}

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Möbel suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Furniture Grid */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FiTrash2 className="text-orange-600 dark:text-orange-400" />
              Möbel zur Entsorgung
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availableFurniture.map(furniture => {
                const quantity = getFurnitureQuantity(furniture.id);
                const isSelected = quantity > 0;

                return (
                  <div
                    key={furniture.id}
                    className={`border rounded-lg p-3 transition-all ${
                      isSelected
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-800'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {furniture.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                          {furniture.description}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {(furniture.volumeLiters / 1000).toFixed(2)} m³
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <>
                          <button
                            onClick={() => handleDecrement(furniture.id)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300 font-bold"
                          >
                            <FiMinus size={16} />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
                            {quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(furniture.id)}
                            className="w-8 h-8 flex items-center justify-center bg-orange-600 hover:bg-orange-700 rounded text-white font-bold"
                          >
                            <FiPlus size={16} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleIncrement(furniture.id)}
                          className="w-full px-3 py-1.5 bg-orange-600 hover:bg-orange-700 rounded text-white text-sm font-medium transition-colors flex items-center justify-center gap-1"
                        >
                          <FiPlus size={14} />
                          Hinzufügen
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {availableFurniture.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <FiTrash2 size={32} className="mx-auto mb-2 opacity-50" />
                <p>Keine Möbel gefunden</p>
              </div>
            )}
          </div>

          {/* Custom Furniture */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Eigene Möbel hinzufügen
              </h3>
              <button
                onClick={() => setShowCustomModal(true)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <FiPlus size={18} />
                Hinzufügen
              </button>
            </div>

            {/* Custom Furniture List */}
            {disposal.customFurnitureItems.length > 0 ? (
              <div className="space-y-2">
                {disposal.customFurnitureItems.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-3"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {(item.volumeLiters / 1000).toFixed(2)} m³ × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (item.quantity === 1) {
                            removeCustomDisposalFurniture(item.id);
                          } else {
                            updateCustomDisposalFurniture(item.id, { quantity: item.quantity - 1 });
                          }
                        }}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="w-6 text-center font-semibold text-gray-900 dark:text-white text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCustomDisposalFurniture(item.id, { quantity: item.quantity + 1 })}
                        className="w-7 h-7 flex items-center justify-center bg-orange-600 hover:bg-orange-700 rounded text-white"
                      >
                        <FiPlus size={14} />
                      </button>
                      <button
                        onClick={() => removeCustomDisposalFurniture(item.id)}
                        className="w-7 h-7 flex items-center justify-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors ml-2"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Noch keine eigenen Möbel hinzugefügt
              </p>
            )}
          </div>
        </>
      )}

      {/* No Disposal Message */}
      {!disposal.required && (
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
          <div className="text-gray-400 dark:text-gray-500 mb-3">
            <FiTrash2 size={48} className="mx-auto opacity-50" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Keine Entsorgung erforderlich
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Sie haben angegeben, dass Sie keinen Entsorgungsservice benötigen.
          </p>
        </div>
      )}

      {/* Custom Furniture Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Eigenes Möbelstück hinzufügen
            </h3>

            {customError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-4">
                <p className="text-sm text-red-800 dark:text-red-200">{customError}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="z.B. Alter Schrank"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Breite (cm)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(e.target.value)}
                    placeholder="100"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Länge (cm)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={customLength}
                    onChange={(e) => setCustomLength(e.target.value)}
                    placeholder="50"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Höhe (cm)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(e.target.value)}
                    placeholder="200"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowCustomModal(false);
                  setCustomError('');
                  setCustomName('');
                  setCustomWidth('');
                  setCustomLength('');
                  setCustomHeight('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
              >
                Abbrechen
              </button>
              <button
                onClick={handleAddCustomFurniture}
                className="flex-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
              >
                Hinzufügen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
