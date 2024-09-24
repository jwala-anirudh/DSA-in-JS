/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Given a binary array nums and an integer k, return the
 * maximum number of consecutive 1's in the array if you can
 * flip at most k 0's.
 */
function longestOnes(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount += 1;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount -= 1;
      }

      left += 1;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
