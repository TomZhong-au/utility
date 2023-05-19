/**
 * Converts the given number of seconds into hours, minutes, and seconds.
 *
 * @param {number} second - The number of seconds to convert.
 * @returns - An object containing the converted hours, minutes, and seconds.
 */

export function secondToHour(second: number): { hour: number; minute: number; second: number; } {
    const hour = Math.floor(second / 3600);
    const minute = Math.floor((second % 3600) / 60);
    const secondLeft = second % 60;
  
    return { hour, minute, second: secondLeft };
  }