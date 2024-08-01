// Input = [(, (, ), ), (, )]

function balanceParatheses(arr, startIndex = 0, currentIndex = 0) {
  if (startIndex === arr.length) {
    return currentIndex === 0;
  }

  if (currentIndex < 0) {
    return false;
  }

  if (arr[startIndex] === "(") {
    balanceParatheses(arr, startIndex + 1, currentIndex + 1);
  } else if (arr[startIndex] === ")") {
    balanceParatheses(arr, startIndex + 1, currentIndex - 1);
  } else {
    return false;
  }
}
