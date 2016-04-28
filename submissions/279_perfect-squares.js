/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (num) {
  var dp = [], min, i, j;

  for (i = 1; i <= num; ++i) {
    if (Math.sqrt(i) % 1 === 0)
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