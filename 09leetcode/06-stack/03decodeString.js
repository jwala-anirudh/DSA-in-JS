/**
 * @param {string} s
 * @return {string}
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the
 * encoded_string inside the square brackets is being repeated
 * exactly k times. Note that k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid; there are
 * no extra white spaces, square brackets are well-formed, etc. Furthermore,
 * you may assume that the original data does not contain any digits
 * and that digits are only for those repeat numbers, k.
 *
 * For example, there will not be input like 3a or 2[4].
 *
 * The test cases are generated so that the length of
 * the output will never exceed 105.
 */
function decodeString(s) {
  let stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (const character of s) {
    if (character >= "0" && character <= "9") {
      currentNum = currentNum * 10 + (character - "0");
    } else if (character === "[") {
      stack.push(currentNum);
      stack.push(currentStr);

      // reset
      currentNum = 0;
      currentStr = "";
    } else if (character === "]") {
      let prevString = stack.pop();
      let repeatTimes = stack.pop();

      currentStr = prevString + currentStr.repeat(repeatTimes);
    } else {
      currentStr += character;
    }
  }

  return currentStr;
}
