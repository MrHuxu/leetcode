/**
 * Problem: https://leetcode.com/problems/perfect-squares/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (num) {
  var dp = [], min, i, j;

  for (i = 1; i <= num; ++i) {
    if (0 === Math.sqrt(i) % 1)
      dp[i] = 1;
    else {
      min = i;
      for (j = 1; j * j < i; ++j) {
        min = Math.min(min, dp[i - j * j] + 1);
      }
      dp[i] = min;
    }
  }

  return dp[num];
};
module.exports = numSquares;
