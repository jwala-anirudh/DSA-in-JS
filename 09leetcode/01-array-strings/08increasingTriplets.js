/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Given an integer array nums, return true if there exists a
 * triple of indices (i, j, k)
 *
 * such that i < j < k and nums[i] < nums[j] < nums[k].
 *
 * If no such indices exists, return false.
 */
function increasingTriplet(nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      return true;
    }
  }

  return false;
}
