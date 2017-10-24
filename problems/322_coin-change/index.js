/**
 * Problem: https://leetcode.com/problems/coin-change/description/
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
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

module.exports = coinChange;
