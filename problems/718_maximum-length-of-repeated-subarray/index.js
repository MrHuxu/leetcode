/**
 * Problem: https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = function(A, B) {
  const dp = [[0]];
  for (let i = 1; i <= B.length; i++) dp[0][i] = 0;

  let result = 0;
  for (let i = 1; i <= A.length; i++) {
    dp[i] = [0];
    for (let j = 1; j <= B.length; j++) {
      dp[i][j] = A[i - 1] === B[j - 1] ? (dp[i - 1][j - 1] + 1) : 0;
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
};

module.exports = findLength;
