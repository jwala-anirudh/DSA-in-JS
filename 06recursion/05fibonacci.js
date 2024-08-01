// iterative
function itrFibonacci(nth) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < nth; i++) {
    let temp = n0 + n1;

    n0 = n1;
    n1 = temp;
  }

  return n0;
}

// recursive
function fibbonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibbonacci(n - 1) + fibbonacci(n - 2);
}

console.log(itrFibonacci(6));
console.log(fibbonacci(6));
