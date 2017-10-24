/**
 * Problem: https://leetcode.com/problems/maximum-subarray/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var dp = [0], max;
  for (var i = 1, l = nums.length; i <= l; ++i) {
    if (1 === i)
      dp[i] = nums[i - 1];
    else {
      dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1]);
    }
    if (max === undefined || dp[i] > max) max = dp[i];
  }

  return max;
};
module.exports = maxSubArray;
