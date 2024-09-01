/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * For two strings s and t, we say "t divides s" if and only if
 * s = t + t + t + ... + t + t
 *
 * (i.e., t is concatenated with itself one or more times).
 *
 * Given two strings str1 and str2, return the largest string x
 * such that x divides both str1 and str2.
 */
function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(a, b) {
    if (b.length === 0) {
      return a;
    }

    return gcd(b, a.slice(0, a.length % b.length));
  }

  return gcd(str1, str2);
}
