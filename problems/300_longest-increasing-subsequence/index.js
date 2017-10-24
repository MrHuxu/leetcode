/**
 * Problem: https://leetcode.com/problems/longest-increasing-subsequence/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var dp = [], max = 0, tmp;
  
  for (var i = 0, len = nums.length; i < len; ++i) {
    tmp = 1;
    for (var j = i - 1; j >= 0; --j) {
      if (nums[i] > nums[j]) tmp = Math.max(tmp, dp[j] + 1);
    }
    dp[i] = tmp;
    max = Math.max(tmp, max);
  }
  
  return max;
};
module.exports = lengthOfLIS;
