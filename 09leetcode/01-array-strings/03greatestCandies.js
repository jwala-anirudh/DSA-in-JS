/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 *
 * There are n kids with candies. You are given an integer array candies,
 * where each candies[i] represents the number of candies the i-th kid has,
 * and an integer extraCandies, denoting the number of extra candies
 * that you have.
 *
 * Return a boolean array result of length n, where result[i] is true
 * if, after giving the ith kid all the extraCandies, they will have
 * the greatest number of candies among all the kids, or false otherwise.
 *
 * Note that multiple kids can have the greatest number of candies.
 */
function kidsWithCandies(candies, extraCandies) {
  const maxNoOfCandies = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= maxNoOfCandies);
}
