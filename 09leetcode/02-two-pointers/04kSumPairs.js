/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * You are given an integer array nums and an integer k.
 *
 * In one operation, you can pick two numbers from the array whose sum
 * equals k and remove them from the array.
 *
 * Return the maximum number of operations you can perform on the array.
 */
function maxOperations(nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  let operations = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      operations += 1;
      left += 1;
      right -= 1;
    } else if (sum < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return operations;
}

// Approach 2
