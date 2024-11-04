/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 *
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 *
 * - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 *
 * Note that the integers in the lists may be returned in any order.
 */
function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const unique1 = [...set1].filter((x) => !set2.has(x));
  const unique2 = [...set2].filter((x) => !set1.has(x));

  return [unique1, unique2];
}
