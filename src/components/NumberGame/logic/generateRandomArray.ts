/**
 * generate a shuffled array using the Fisher-Yates shuffle algorithm
 * @param {number} length
 * @returns array
 */
export function generateRandomArray(length: number) {
    const arr = generateArray(length);
    return shuffleArray(arr);
  }
  
  function generateArray(length: number) {
    return Array.from({ length }, (_, i) => i + 1);
  }
  
  /**
   * Fisher-Yates shuffle algorithm
   * @param array 
   * @returns shuffuled Array
   */
  function shuffleArray<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  