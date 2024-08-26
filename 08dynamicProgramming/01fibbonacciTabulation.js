// Classic Fibbonacci Series Logic
function fibbonacciOfN(n) {
  // base condition
  if (n <= 1) {
    return n;
  }

  return fibbonacciOfN(n - 1) + fibbonacciOfN(n - 2);
}

// Dynamic Programming Tabulation Approach
function fibbonacciTab(n) {
  // base condition
  if (n <= 1) {
    return n;
  }

  const table = Array(n + 1).fill(0);

  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}
