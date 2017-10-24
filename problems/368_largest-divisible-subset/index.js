/**
 * Problem: https://leetcode.com/problems/largest-divisible-subset/description/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (!nums.length) return [];

  nums.sort(function (a, b) {
    return a > b ? 1 : -1;
  });

  var maxLength = 0, dp = {};
  nums.forEach(function (num, index) {
    dp[num] = { max: 1 };
    for (var i = index - 1; i >= 0; --i) {
      if (0 === num % nums[i] && dp[nums[i]].max >= dp[num].max - 1) {
        dp[num].max = dp[nums[i]].max + 1;
        dp[num].pre = i;
      }
    }
    dp[num].arr = dp[num].pre === undefined ? [num] : [].concat(dp[nums[dp[num].pre]].arr, num);
  });

  var max = 0, result;
  nums.forEach(function (num) {
    if (dp[num].max > max) {
      max = dp[num].max;
      result = dp[num].arr;
    }
  });

  return result;
};
module.exports = largestDivisibleSubset;
