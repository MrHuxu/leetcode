var coinChange = function (coins, amount) {
  var dp = [0], i, j, len;
  
  for (i = 0, len = coins.length; i < len; ++i) dp[coins[i]] = 1;
  
  for (i = 1; i <= amount; ++i) {
    if (!dp[i]) {
      for (j = 0; j < len; ++j) {
        if (dp[coins[j]] && dp[coins[j]] !== -1 && dp[i - coins[j]] && dp[i - coins[j]] !== -1) {
          dp[i] = dp[i] ? Math.min(dp[i], dp[coins[j]] + dp[i - coins[j]]) : dp[coins[j]] + dp[i - coins[j]];
        }
      }
      dp[i] = dp[i] || -1;
    }
  }
  
  return dp[amount];
};

console.log(coinChange([1, 3, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([3, 5], 7));
console.log(coinChange([1], 11));
console.log(coinChange([], 3));
console.log(coinChange([1], 0));
console.log(coinChange([186,419,83,408], 6249));
console.log(coinChange([1, 3], 2));