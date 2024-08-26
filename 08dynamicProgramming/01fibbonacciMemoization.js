// Classic Fibbonacci Series Logic
function fibbonacciOfN(n) {
  // base condition
  if (n <= 1) {
    return n;
  }

  return fibbonacciOfN(n - 1) + fibbonacciOfN(n - 2);
}

// Dynamic Programming Memoisation Approach
function fibbonacciTab(n, memo = {}) {
  // check in the memory for the n-th value
  if (n in memo) {
    return memo[n];
  }

  // base condition
  if (n <= 1) {
    return n;
  }

  memo[n] = fibbonacciTab(n - 1, memo) + fibbonacciTab(n - 2, memo);

  return memo[n];
}
