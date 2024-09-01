/**
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 *
 * You are given two strings word1 and word2. Merge the strings
 * by adding letters in alternating order, starting with word1.
 *
 * If a string is longer than the other, append the additional
 * letters onto the end of the merged string.
 *
 * Return the merged string.
 */
function mergeStringsAlternatively(word1, word2) {
  let mergedResult = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    mergedResult += word1[i];
    mergedResult += word2[j];

    i++;
    j++;
  }

  // add remaining for word1
  while (i < word1.length) {
    mergedResult += word1[i];

    i++;
  }

  // add remaining for word2
  while (j < word2.length) {
    mergedResult += word2[j];

    j++;
  }

  return mergedResult;
}
