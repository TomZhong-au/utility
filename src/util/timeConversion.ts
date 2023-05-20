/**
 * Converts the given number of seconds into hours, minutes, seconds and milliseconds.
 *
 * @param {number} value - The number of seconds to convert.
 * @returns - An object containing the converted hours, minutes, and seconds.
 */

export function millisecondsToHour(value: number): { hour: number; minute: number; second: number; millisecond: number; } {
  const totalSeconds = Math.floor(value / 1000);
  const hour = Math.floor(totalSeconds / 3600);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = Math.floor(totalSeconds % 60);
  const millisecond = Math.floor(value % 1000)

  return { hour, minute, second, millisecond };
}

/**
 * Converts milliseconds to a formatted string representation.
 *
 * @param {number} value - The value in milliseconds to be converted.
 * @returns {string} The formatted string representing the converted time.
 *
 * @example
 * // Example usage
 * const timeInMilliseconds = 3661234;
 * const formattedTime = millisecToString(timeInMilliseconds);
 * // Output: "1 h 01 min 01 sec 234"
 */

export function millisecToString(value: number) {
  console.log('time conversion function called')
  const { hour, minute, second, millisecond } = millisecondsToHour(value)

  let output = `${minute.toString().padStart(2, '0')} min ${second.toString().padStart(2, '0')} sec ${millisecond.toString().padStart(3,'0')}`

  if (hour > 0) {
    output = `${hour} h ${output}`
  }
  return output
}