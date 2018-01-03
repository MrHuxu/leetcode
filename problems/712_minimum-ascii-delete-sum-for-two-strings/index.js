/**
 * Problem: https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = function(s1, s2) {
  let min = null;
  dp = [[0]];
  for (let i = 1; i <= s1.length; i++) dp[i] = [dp[i - 1][0] + s1[i - 1].charCodeAt()];
  for (let i = 1; i <= s2.length; i++) dp[0][i] = dp[0][i - 1] + s2[i - 1].charCodeAt();

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const ch1 = s1[i - 1], ch2 = s2[j - 1];
      dp[i][j] = Math.min(dp[i][j - 1] + ch2.charCodeAt(), dp[i - 1][j] + ch1.charCodeAt(), dp[i - 1][j - 1] + (ch1 === ch2 ? 0 : ch1.charCodeAt() + ch2.charCodeAt()));
    }
  }

  return dp[s1.length][s2.length];
};

module.exports = minimumDeleteSum;
