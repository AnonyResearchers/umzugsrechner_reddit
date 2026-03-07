import { useState } from 'react';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { RoomType } from '../../types/calculator';
import { Button } from '../shared/Button';

// Room definitions with emoji and labels (13 standard + 1 custom = 14 room types matching database)
const STANDARD_ROOMS = [
  { type: RoomType.WOHNZIMMER, emoji: '🛋️', label: 'Wohnzimmer', subtitle: 'Wohnbereich' },
  { type: RoomType.SCHLAFZIMMER, emoji: '🛏️', label: 'Schlafzimmer', subtitle: '' },
  { type: RoomType.KINDERZIMMER, emoji: '👶', label: 'Kinderzimmer', subtitle: '' },
  { type: RoomType.KUECHE, emoji: '🍳', label: 'Küche', subtitle: '' },
  { type: RoomType.WOHN_ESSZIMMER, emoji: '🍽️', label: 'Wohn-/Esszimmer', subtitle: 'Kombiniert' },
  { type: RoomType.BADEZIMMER, emoji: '🚿', label: 'Badezimmer', subtitle: 'inkl. WC' },
  { type: RoomType.GAESTEZIMMER, emoji: '🛎️', label: 'Gästezimmer', subtitle: '' },
  { type: RoomType.ARBEITSZIMMER, emoji: '💼', label: 'Büro-/Arbeitszimmer', subtitle: 'Home Office' },
  { type: RoomType.ANKLEIDEZIMMER, emoji: '👔', label: 'Ankleidezimmer', subtitle: 'Garderobe' },
  { type: RoomType.DIELE_FLUR, emoji: '🚪', label: 'Diele/Flur', subtitle: 'Eingangsbereich' },
  { type: RoomType.BALKON, emoji: '🌿', label: 'Balkon/Terrasse', subtitle: 'Außenbereich' },
  { type: RoomType.KELLER, emoji: '📦', label: 'Keller', subtitle: 'Lagerraum' },
  { type: RoomType.GARAGE, emoji: '🚗', label: 'Garage/Garten', subtitle: '' },
  { type: RoomType.ANDERE, emoji: '📍', label: 'Sonstiges', subtitle: 'Andere Räume' },
];

export const Step3Rooms = () => {
  const { data, addRoom, removeRoom } = useCalculatorStore();
  const { rooms } = data;

  // State for custom room modal
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customRoomName, setCustomRoomName] = useState('');
  const [customRoomError, setCustomRoomError] = useState('');

  // Calculate count for each room type
  const getRoomCount = (type: RoomType): number => {
    return rooms.filter(r => r.type === type && !r.customName).length;
  };

  // Get custom rooms (type = ANDERE with customName)
  const getCustomRooms = (): { name: string; count: number; id: string }[] => {
    const customRoomMap = new Map<string, { count: number; id: string }>();

    rooms.forEach(room => {
      if (room.type === RoomType.ANDERE && room.customName) {
        const existing = customRoomMap.get(room.customName);
        if (existing) {
          existing.count++;
        } else {
          customRoomMap.set(room.customName, { count: 1, id: room.id });
        }
      }
    });

    return Array.from(customRoomMap.entries()).map(([name, data]) => ({
      name,
      count: data.count,
      id: data.id,
    }));
  };

  // Handle increment for standard room
  const handleIncrement = (type: RoomType) => {
    const currentCount = getRoomCount(type);
    if (currentCount >= 20) return; // Max limit
    addRoom(type);
  };

  // Handle decrement for standard room
  const handleDecrement = (type: RoomType) => {
    const roomsOfType = rooms.filter(r => r.type === type && !r.customName);
    if (roomsOfType.length === 0) return;

    // Remove the last room of this type
    const lastRoom = roomsOfType[roomsOfType.length - 1];
    if (lastRoom) {
      removeRoom(lastRoom.id);
    }
  };

  // Handle custom room addition
  const handleAddCustomRoom = () => {
    const trimmedName = customRoomName.trim();

    if (!trimmedName) {
      setCustomRoomError('Bitte geben Sie einen Raumnamen ein.');
      return;
    }

    if (trimmedName.length < 2) {
      setCustomRoomError('Der Raumname muss mindestens 2 Zeichen lang sein.');
      return;
    }

    if (trimmedName.length > 50) {
      setCustomRoomError('Der Raumname darf maximal 50 Zeichen lang sein.');
      return;
    }

    // Add custom room
    addRoom(RoomType.ANDERE, trimmedName);

    // Reset and close modal
    setCustomRoomName('');
    setCustomRoomError('');
    setShowCustomModal(false);
  };

  // Handle increment for custom room
  const handleIncrementCustom = (name: string) => {
    const customRoomsOfName = rooms.filter(
      r => r.type === RoomType.ANDERE && r.customName === name
    );
    if (customRoomsOfName.length >= 20) return; // Max limit
    addRoom(RoomType.ANDERE, name);
  };

  // Handle decrement for custom room
  const handleDecrementCustom = (name: string) => {
    const customRoomsOfName = rooms.filter(
      r => r.type === RoomType.ANDERE && r.customName === name
    );
    if (customRoomsOfName.length === 0) return;

    // Remove the last room with this name
    const lastRoom = customRoomsOfName[customRoomsOfName.length - 1];
    if (lastRoom) {
      removeRoom(lastRoom.id);
    }
  };

  // Calculate total rooms
  const totalRooms = rooms.length;

  const customRooms = getCustomRooms();

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Welche Räume möchten Sie umziehen?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wählen Sie die Anzahl der Räume in Ihrer Wohnung/Haus
        </p>
      </div>

      {/* Standard Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {STANDARD_ROOMS.map(room => {
          const count = getRoomCount(room.type);
          return (
            <div
              key={room.type}
              className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">{room.emoji}</div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">
                  {room.label}
                </div>
                {room.subtitle && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {room.subtitle}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => handleDecrement(room.type)}
                  disabled={count === 0}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                  aria-label="Verringern"
                >
                  <FiMinus size={16} />
                </button>

                <span className="text-xl font-bold text-gray-900 dark:text-white min-w-[2rem] text-center">
                  {count}
                </span>

                <button
                  onClick={() => handleIncrement(room.type)}
                  disabled={count >= 20}
                  className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  aria-label="Erhöhen"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Rooms Section */}
      {customRooms.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Eigene Räume
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customRooms.map((customRoom, index) => (
              <div
                key={`${customRoom.name}-${index}`}
                className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4"
              >
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">🏷️</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                    {customRoom.name}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Eigener Raum
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleDecrementCustom(customRoom.name)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    aria-label="Verringern"
                  >
                    <FiMinus size={16} />
                  </button>

                  <span className="text-xl font-bold text-gray-900 dark:text-white min-w-[2rem] text-center">
                    {customRoom.count}
                  </span>

                  <button
                    onClick={() => handleIncrementCustom(customRoom.name)}
                    disabled={customRoom.count >= 20}
                    className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    aria-label="Erhöhen"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Custom Room Button */}
      <Button
        variant="outline"
        onClick={() => setShowCustomModal(true)}
        className="flex items-center gap-2 mb-6"
      >
        <FiPlus size={20} />
        Eigenen Raum hinzufügen
      </Button>

      {/* Total Rooms Counter */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Gesamt ausgewählte Räume:
          </span>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {totalRooms}
          </span>
        </div>
        {totalRooms === 0 && (
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
            Bitte wählen Sie mindestens einen Raum aus, um fortzufahren.
          </p>
        )}
      </div>

      {/* Custom Room Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Eigenen Raum hinzufügen
              </h3>
              <button
                onClick={() => {
                  setShowCustomModal(false);
                  setCustomRoomName('');
                  setCustomRoomError('');
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="mb-4">
              <label
                htmlFor="custom-room-name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Raumname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="custom-room-name"
                value={customRoomName}
                onChange={(e) => {
                  setCustomRoomName(e.target.value);
                  setCustomRoomError('');
                }}
                placeholder="z.B. Hobbyraum, Wintergarten, Sauna..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                maxLength={50}
                autoFocus
              />
              {customRoomError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {customRoomError}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Maximal 50 Zeichen
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowCustomModal(false);
                  setCustomRoomName('');
                  setCustomRoomError('');
                }}
                className="flex-1"
              >
                Abbrechen
              </Button>
              <Button
                variant="primary"
                onClick={handleAddCustomRoom}
                className="flex-1"
              >
                Hinzufügen
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
