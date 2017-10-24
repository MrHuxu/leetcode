/**
 * Problem: https://leetcode.com/problems/target-sum/description/
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  var result = 0;

  var dp = nums.reduce(function (dp, num) {
    var curr = {};
    var pres = Object.keys(dp).map(Number);
    if (pres.length) {
      pres.forEach(function (pre) {
        curr[pre + num] = (curr[pre + num] || 0) + dp[pre];
        curr[pre - num] = (curr[pre - num] || 0) + dp[pre];
      });
    } else {
      curr[num] = (curr[num] || 0) + 1;
      curr[-num] = (curr[-num] || 0) + 1;
    }
    return curr;
  }, {});

  return dp[S] || 0;
};
module.exports = findTargetSumWays;
