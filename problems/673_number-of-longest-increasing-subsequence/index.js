/**
 * Problem: https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp = [], result = [0, 0];
  for (let i = 0; i < nums.length; ++i) {
    let max = 1, tmp = { 1: 1 };
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j][0] + 1);
        if (max === dp[j][0] + 1) {
          tmp[max] = tmp[max] ? tmp[max] + dp[j][1] : dp[j][1];
        }
      }
    }
    dp[i] = [max, tmp[max]];
    result[max] = result[max] ? result[max] + tmp[max] : tmp[max];
  }

  return result.pop();
};

module.exports = findNumberOfLIS;
