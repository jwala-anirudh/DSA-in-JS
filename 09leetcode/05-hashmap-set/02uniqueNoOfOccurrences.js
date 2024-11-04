/**
 * @param {number[]} arr
 * @return {boolean}
 *
 * Given an array of integers arr, return true if the number of occurrences
 * of each value in the array is unique or false otherwise.
 */
function uniqueOccurrences(arr) {
  const countMap = new Map();

  for (const num of arr) {
    const value = countMap.get(num) || 0;
    countMap.set(num, value + 1);
  }

  const countSet = new Set();

  for (const count of countMap.values()) {
    if (countSet.has(count)) {
      return false;
    }

    countSet.add(count);
  }

  return true;
}
