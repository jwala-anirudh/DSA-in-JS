/**
 * @param {string} s
 * @return {string}
 *
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will be
 * separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words. Do not include
 * any extra spaces.
 */
function reverseWords(s) {
  let result = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      // construct the word
      word += s[i];
    } else if (word.length > 0 && s[i] === " ") {
      // on hitting the space and we have constructed some work until now
      result.unshift(word);

      // reset for next iteration
      word = "";
    }
  }

  // to append the last computed word
  if (word.length > 0) {
    result.unshift(word);
  }

  return result.join(" ");
}

console.log(reverseWords("the sky is blue"));
