/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Given an integer array nums, move all 0's to the end of
 * it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without
 * making a copy of the array.
 */
function moveZeroes(nums) {
  let writeIndex = 0;

  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex += 1;
    }
  }

  // fill the remaining positions with Zeros
  for (; writeIndex < nums.length; writeIndex++) {
    nums[writeIndex] = 0;
  }
}
