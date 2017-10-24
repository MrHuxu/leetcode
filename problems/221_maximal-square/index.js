/**
 * Problem: https://leetcode.com/problems/maximal-square/description/
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  var maxWidth = 0;
  var len1 = matrix.length, len2 = matrix[0].length;
  var dp = [], i, j;
  for (i = 0; i < len1; ++i) dp.push([]);
  
  for (i = 0; i < len1; ++i) {
    for (j = 0; j < len2; ++j) {
      if ('1' === matrix[i][j]) {
        if ((matrix[i - 1] && '1' === matrix[i - 1][j]) && '1' === matrix[i][j - 1]) {
          if (dp[i - 1][j] === dp[i][j - 1] && dp[i][j - 1] === dp[i - 1][j - 1])
            dp[i][j] = dp[i - 1][j - 1] + 1;
          else
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        } else {
          dp[i][j] = 1;
        }
      } else {
        dp[i][j] = 0;
      }
      maxWidth = Math.max(dp[i][j], maxWidth);
    }
  }
  
  return maxWidth * maxWidth;
};
module.exports = maximalSquare;
