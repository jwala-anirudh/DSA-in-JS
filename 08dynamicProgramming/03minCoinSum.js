function minCoin(amount, coins, memo = {}) {
  if (amount in memo) {
    return memo[amount];
  }

  if (amount === 0) {
    return 0;
  }

  if (amount < 0) {
    return -1;
  }

  let minCoinsCount = Infinity;

  for (let coin of coins) {
    let result = minCoin(amount - coin, coins, memo);

    if (result !== -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }

  memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;
  return memo[amount];
}
