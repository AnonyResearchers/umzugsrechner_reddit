import type { Room } from '../types/calculator';

/**
 * Format room display name with auto-numbering for duplicates
 * - If customName exists, use it
 * - If displayNumber exists, append it (e.g., "schlafzimmer 2")
 * - Otherwise, just show the room type
 */
export function formatRoomDisplayName(room: Room): string {
  // User-provided custom name takes priority
  if (room.customName) {
    return room.customName;
  }

  // Auto-numbered duplicates
  if (room.displayNumber && room.displayNumber > 1) {
    return `${room.type} ${room.displayNumber}`;
  }

  // First of its type, just show the type
  return room.type;
}

/**
 * Calculate display number for a new room based on existing rooms
 * Returns the number to assign (1 for first, 2 for second, etc.)
 */
export function calculateRoomDisplayNumber(
  roomType: string,
  existingRooms: Room[]
): number {
  const sameTypeRooms = existingRooms.filter(r => r.type === roomType);
  return sameTypeRooms.length + 1;
}
