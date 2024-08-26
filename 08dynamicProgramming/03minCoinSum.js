function minCoin(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let minCoinsCount = Infinity;

  for (const coin of coins) {
    const result = minCoin(amount - coin, coins, memo);

    if (result !== -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }

  //   for (const coin of coins) {
  //     const recentCount = 1 + minCoin(amount - coin, coins, memo);
  //     minCoinsCount = Math.min(recentCount, minCoinsCount);
  //   }

  memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;
  return memo[amount];
}
