import { useMemo } from 'react';
import { FiMapPin, FiHome, FiPackage, FiEdit2, FiCheckCircle } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { FURNITURE_ITEMS } from '../../data/furniture';
import type { Etage } from '../../types/calculator';

// Helper function to format Etage for display
const formatEtage = (etage: Etage): string => {
  const etageMap: Record<Etage, string> = {
    'keller': 'Keller',
    'eg': 'EG',
    '1og': '1. OG',
    '2og': '2. OG',
    '3og': '3. OG',
    '4og': '4. OG',
    '>4og': '> 4. OG',
  };
  return etageMap[etage] || etage;
};

export const Step5Verification = () => {
  const { data, goToStep } = useCalculatorStore();
  const { beladestellen, entladestellen, rooms, furnitureItems, customFurnitureItems } = data;

  // Calculate totals
  const totals = useMemo(() => {
    let totalVolumeLiters = 0;
    let totalFurnitureCount = 0;

    // Regular furniture
    furnitureItems.forEach(selectedItem => {
      const furnitureData = FURNITURE_ITEMS.find(f => f.id === selectedItem.furnitureItemId);
      if (furnitureData) {
        totalFurnitureCount += selectedItem.quantity;
        totalVolumeLiters += furnitureData.volumeLiters * selectedItem.quantity;
      }
    });

    // Custom furniture
    customFurnitureItems.forEach(customItem => {
      totalFurnitureCount += customItem.quantity;
      totalVolumeLiters += customItem.volumeLiters * customItem.quantity;
    });

    return {
      totalRooms: rooms.length,
      totalFurniture: totalFurnitureCount,
      totalVolumeM3: (totalVolumeLiters / 1000).toFixed(2),
      totalLocations: beladestellen.length + entladestellen.length,
    };
  }, [furnitureItems, customFurnitureItems, rooms, beladestellen, entladestellen]);

  // Group furniture by room
  const furnitureByRoom = useMemo(() => {
    const grouped: Record<string, {
      room: typeof rooms[0] | null;
      regularItems: typeof furnitureItems;
      customItems: typeof customFurnitureItems;
      totalVolumeLiters: number;
      totalCount: number;
    }> = {};

    // Initialize all rooms
    rooms.forEach(room => {
      grouped[room.id] = {
        room,
        regularItems: [],
        customItems: [],
        totalVolumeLiters: 0,
        totalCount: 0,
      };
    });

    // Add unassigned group for furniture without a room
    grouped['unassigned'] = {
      room: null,
      regularItems: [],
      customItems: [],
      totalVolumeLiters: 0,
      totalCount: 0,
    };

    // Group regular furniture
    furnitureItems.forEach(item => {
      const roomId = item.roomId || 'unassigned';
      if (!grouped[roomId]) {
        grouped[roomId] = {
          room: null,
          regularItems: [],
          customItems: [],
          totalVolumeLiters: 0,
          totalCount: 0,
        };
      }
      grouped[roomId].regularItems.push(item);

      const furnitureData = FURNITURE_ITEMS.find(f => f.id === item.furnitureItemId);
      if (furnitureData) {
        grouped[roomId].totalVolumeLiters += furnitureData.volumeLiters * item.quantity;
        grouped[roomId].totalCount += item.quantity;
      }
    });

    // Group custom furniture
    customFurnitureItems.forEach(item => {
      const roomId = item.roomId || 'unassigned';
      if (!grouped[roomId]) {
        grouped[roomId] = {
          room: null,
          regularItems: [],
          customItems: [],
          totalVolumeLiters: 0,
          totalCount: 0,
        };
      }
      grouped[roomId].customItems.push(item);
      grouped[roomId].totalVolumeLiters += item.volumeLiters * item.quantity;
      grouped[roomId].totalCount += item.quantity;
    });

    return grouped;
  }, [rooms, furnitureItems, customFurnitureItems]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Zusammenfassung Ihrer Angaben
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Bitte überprüfen Sie Ihre Angaben. Sie können jederzeit zurückgehen und Änderungen vornehmen.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FiMapPin className="text-blue-600 dark:text-blue-400" size={20} />
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Standorte</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totals.totalLocations}</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FiHome className="text-green-600 dark:text-green-400" size={20} />
            <span className="text-sm font-medium text-green-900 dark:text-green-100">Räume</span>
          </div>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{totals.totalRooms}</p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FiPackage className="text-purple-600 dark:text-purple-400" size={20} />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Möbel</span>
          </div>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{totals.totalFurniture}</p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FiCheckCircle className="text-orange-600 dark:text-orange-400" size={20} />
            <span className="text-sm font-medium text-orange-900 dark:text-orange-100">Volumen</span>
          </div>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{totals.totalVolumeM3} m³</p>
        </div>
      </div>

      {/* Beladestellen Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FiMapPin className="text-blue-600 dark:text-blue-400" />
            Beladestellen ({beladestellen.length})
          </h3>
          <button
            onClick={() => goToStep(1)}
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <FiEdit2 size={14} />
            Bearbeiten
          </button>
        </div>

        <div className="space-y-3">
          {beladestellen.map((location, index) => (
            <div
              key={location.id}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">PLZ {location.plz}</span>
                </div>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                  {location.propertyType}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {location.etage && (
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Etage:</span> {formatEtage(location.etage)}
                  </div>
                )}
                {location.aufzugAvailable !== undefined && (
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Aufzug:</span> {location.aufzugAvailable ? 'Ja' : 'Nein'}
                  </div>
                )}
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">LKW Entfernung:</span> {location.lkwDistance}
                </div>
                {location.halteverbotszone && (
                  <div className="text-orange-600 dark:text-orange-400 font-medium">
                    Halteverbotszone erforderlich
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Entladestellen Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FiMapPin className="text-green-600 dark:text-green-400" />
            Entladestellen ({entladestellen.length})
          </h3>
          <button
            onClick={() => goToStep(2)}
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <FiEdit2 size={14} />
            Bearbeiten
          </button>
        </div>

        <div className="space-y-3">
          {entladestellen.map((location, index) => (
            <div
              key={location.id}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-green-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {beladestellen.length + index + 1}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">PLZ {location.plz}</span>
                </div>
                <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                  {location.propertyType}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {location.etage && (
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Etage:</span> {formatEtage(location.etage)}
                  </div>
                )}
                {location.aufzugAvailable !== undefined && (
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Aufzug:</span> {location.aufzugAvailable ? 'Ja' : 'Nein'}
                  </div>
                )}
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">LKW Entfernung:</span> {location.lkwDistance}
                </div>
                {location.halteverbotszone && (
                  <div className="text-orange-600 dark:text-orange-400 font-medium">
                    Halteverbotszone erforderlich
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rooms Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FiHome className="text-purple-600 dark:text-purple-400" />
            Räume ({rooms.length})
          </h3>
          <button
            onClick={() => goToStep(3)}
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <FiEdit2 size={14} />
            Bearbeiten
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {rooms.map(room => (
            <div
              key={room.id}
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg px-3 py-2 text-sm"
            >
              <span className="font-medium text-purple-900 dark:text-purple-100">
                {room.customName || room.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Furniture Section - Grouped by Room */}
      {(furnitureItems.length > 0 || customFurnitureItems.length > 0 || rooms.length > 0) && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiPackage className="text-orange-600 dark:text-orange-400" />
              Möbel ({totals.totalFurniture} Stück, {totals.totalVolumeM3} m³)
            </h3>
            <button
              onClick={() => goToStep(4)}
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <FiEdit2 size={14} />
              Bearbeiten
            </button>
          </div>

          <div className="space-y-4">
            {/* Display furniture grouped by room */}
            {rooms.map(room => {
              const roomFurniture = furnitureByRoom[room.id];
              if (!roomFurniture) return null;
              const hasItems = roomFurniture.regularItems.length > 0 || roomFurniture.customItems.length > 0;

              return (
                <div key={room.id} className="border-l-4 border-purple-400 dark:border-purple-600 pl-4">
                  {/* Room Header */}
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {room.customName || room.type}
                    </h4>
                    {hasItems && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {roomFurniture.totalCount} Möbel, {(roomFurniture.totalVolumeLiters / 1000).toFixed(2)} m³
                      </span>
                    )}
                  </div>

                  {!hasItems ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      Keine Möbel hinzugefügt
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {/* Regular Furniture */}
                      {roomFurniture.regularItems.map(item => {
                        const furnitureData = FURNITURE_ITEMS.find(f => f.id === item.furnitureItemId);
                        if (!furnitureData) return null;

                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600"
                          >
                            <div className="flex items-center gap-3">
                              <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 font-bold text-sm px-2 py-1 rounded">
                                {item.quantity}x
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                {furnitureData.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {((furnitureData.volumeLiters * item.quantity) / 1000).toFixed(2)} m³
                            </span>
                          </div>
                        );
                      })}

                      {/* Custom Furniture */}
                      {roomFurniture.customItems.map(item => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800"
                        >
                          <div className="flex items-center gap-3">
                            <span className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded">
                              {item.quantity}x
                            </span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              {item.name}
                            </span>
                            <span className="text-xs bg-green-200 dark:bg-green-900/60 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                              Eigenes
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {((item.volumeLiters * item.quantity) / 1000).toFixed(2)} m³
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Unassigned furniture (not linked to any room) */}
            {(() => {
              const unassigned = furnitureByRoom['unassigned'];
              return unassigned && (unassigned.regularItems.length > 0 || unassigned.customItems.length > 0) && (
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-4">
                {/* Unassigned Header */}
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Nicht zugeordnet
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {unassigned.totalCount} Möbel, {(unassigned.totalVolumeLiters / 1000).toFixed(2)} m³
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Regular Furniture */}
                  {unassigned.regularItems.map(item => {
                    const furnitureData = FURNITURE_ITEMS.find(f => f.id === item.furnitureItemId);
                    if (!furnitureData) return null;

                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center gap-3">
                          <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 font-bold text-sm px-2 py-1 rounded">
                            {item.quantity}x
                          </span>
                          <span className="text-gray-900 dark:text-white font-medium">
                            {furnitureData.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {((furnitureData.volumeLiters * item.quantity) / 1000).toFixed(2)} m³
                        </span>
                      </div>
                    );
                  })}

                  {/* Custom Furniture */}
                  {unassigned.customItems.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded">
                          {item.quantity}x
                        </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {item.name}
                        </span>
                        <span className="text-xs bg-green-200 dark:bg-green-900/60 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                          Eigenes
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {((item.volumeLiters * item.quantity) / 1000).toFixed(2)} m³
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              );
            })()}

            {/* No furniture at all */}
            {furnitureItems.length === 0 && customFurnitureItems.length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4 italic">
                Keine Möbel hinzugefügt
              </p>
            )}
          </div>
        </div>
      )}

      {/* Confirmation Note */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <FiCheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-blue-900 dark:text-blue-100">
            <p className="font-medium mb-1">Sind alle Angaben korrekt?</p>
            <p className="text-blue-700 dark:text-blue-200">
              Bitte überprüfen Sie alle Angaben sorgfältig. Klicken Sie auf "Weiter", um fortzufahren, oder nutzen Sie die
              Bearbeiten-Buttons, um Änderungen vorzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
