function printNumber(min, max) {
  if (min > max) {
    return;
  }

  printNumber(min + 1, max);
  console.log(min);
}

function printNumber2(min, max) {
  if (min > max) {
    return;
  }

  console.log(min);
  printNumber2(min + 1, max);
}

printNumber(1, 5);
console.log("-----------------");
printNumber2(1, 5);
