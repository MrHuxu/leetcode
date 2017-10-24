/**
 * Problem: https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) return 0;

  let result = 1;
  let dp = [1];

  for (let i = 1; i < nums.length; ++i) {
    dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1;
    result = Math.max(result, dp[i]);
  }

  return result;
};
module.exports = findLengthOfLCIS;
