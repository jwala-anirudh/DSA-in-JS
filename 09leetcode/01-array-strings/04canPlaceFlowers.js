/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 *
 * You have a long flowerbed in which some of the plots are planted,
 * and some are not. However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0
 * means empty and 1 means not empty, and an integer n, return true
 * if n new flowers can be planted in the flowerbed without violating
 * the no-adjacent-flowers rule and false otherwise.
 */
function canPlaceFlowers(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
      let isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1;
        count += 1;

        // optimisation
        if (count >= n) {
          return true;
        }
      }
    }
  }

  return count >= n;
}
