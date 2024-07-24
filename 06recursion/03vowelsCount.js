// count vowels in a string

function isVowel(character) {
  let lowerChar = character.toLowerCase();
  let vowels = "aeiou";

  if (vowels.indexOf(lowerChar) !== -1) {
    return true;
  }

  return false;
}

function countVowelsIter(str = "") {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      counter = counter + 1;
    }
  }

  return counter;
}

function countVowels(str = "", strLength) {
  console.log(
    `Length: ${strLength}, Current string: ${str.substring(0, strLength)}`
  );

  if (strLength === 1) {
    console.log("Base case got hit here");
    console.log("Base case: ", Number(isVowel(str[0])));
    return Number(isVowel(str[0]));
  }

  // return countVowels(str, strLength - 1) + isVowel(str[strLength - 1]);

  let result = countVowels(str, strLength - 1) + isVowel(str[strLength - 1]);
  console.log(`count after checking ${str[strLength - 1]}: ${result}`);
  return result;
}

console.log(countVowels("hello", 5));
