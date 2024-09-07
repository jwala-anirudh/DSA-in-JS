/**
 * @param {string} s
 * @return {string}
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
 * and upper cases, more than once.
 */
function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  const characters = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && vowels.indexOf(characters[left]) === -1) {
      left += 1;
    }

    while (left < right && vowels.indexOf(characters[right]) === -1) {
      right -= 1;
    }

    // swap the value of vowels
    if (left < right) {
      let temp = characters[left];
      characters[left] = characters[right];
      characters[right] = temp;

      // increment the outer loop pointers
      left += 1;
      right -= 1;
    }
  }

  return characters.join("");
}
