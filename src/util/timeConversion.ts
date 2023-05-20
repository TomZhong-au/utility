/**
 * Converts the given number of seconds into hours, minutes, and seconds.
 *
 * @param {number} value - The number of seconds to convert.
 * @returns - An object containing the converted hours, minutes, and seconds.
 */

export function millisecondsToHour(value: number): { hour: number; minute: number; second: number; millisecond: number; } {
  const totalSeconds = Math.floor(value / 100);
  const hour = Math.floor(totalSeconds / 3600);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = Math.floor(totalSeconds % 60);
  const millisecond = (value % 100) *10;

  return { hour, minute, second, millisecond };
}
