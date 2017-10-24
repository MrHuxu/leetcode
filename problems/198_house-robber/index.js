/**
 * Problem: https://leetcode.com/problems/house-robber/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  var robbed, dp = [nums[0]], len = nums.length;

  if (len > 1) {
    dp[1] = nums[1] > nums[0] ? nums[1] : dp[0];
    robbed = nums[1] > nums[0];
  }
  for (var i = 2; i < len; ++i) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[len - 1];
};
module.exports = rob;
