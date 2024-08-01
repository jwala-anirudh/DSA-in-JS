// iteration
function itrRemoveAdjDup(inputStr) {
  let result = "";

  for (let i = 0; i < inputStr.length; i++) {
    if (i === inputStr.length - 1 || inputStr[i] !== inputStr[i + 1]) {
      result += inputStr[i];
    }
  }

  return result;
}

// recursion
function recursiveRAD(inputStr) {
  if (inputStr.length <= 1) {
    return inputStr;
  }

  if (inputStr[0] === inputStr[1]) {
    return recursiveRAD(inputStr.substring(1));
  }

  return recursiveRAD(inputStr[0] + recursiveRAD(inputStr.substring(1)));
}
