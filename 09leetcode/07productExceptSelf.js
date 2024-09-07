/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal
 * to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit
 * in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using
 * the division operation.
 */
function productExceptSelf(nums = []) {
  const length = nums.length;

  const leftProduct = new Array(length).fill(1);
  const rightProduct = new Array(length).fill(1);

  const answer = new Array(length);

  // left-wise product of nums
  for (let i = 1; i < length; i++) {
    leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
  }

  // right-wise product of nums
  for (let i = length - 2; i >= 0; i--) {
    rightProduct[i] = nums[i + 1] * rightProduct[i + 1];
  }

  for (let i = 0; i < length; i++) {
    answer[i] = leftProduct[i] * rightProduct[i];
  }

  return answer;
}
