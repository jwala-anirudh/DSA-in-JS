/**
 * task is to remove all tabs and spaces
 * from a string. This includes the character
 * \t and " " from a string
 */

// iteration
function itrRemoveTAS(inputStr) {
  let result = "";

  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];

    if (char !== " " && char !== "\t") {
      result += char;
    }
  }

  return result;
}

// recursion
function removeTAS(inputStr) {
  if (inputStr.length === 0) {
    return "";
  }

  const firstChar = inputStr[0];
  const restOfString = inputStr.slice(1);

  if (firstChar !== " " && firstChar !== "\t") {
    return removeTAS(restOfString);
  }

  return firstChar + removeTAS(restOfString);
}
