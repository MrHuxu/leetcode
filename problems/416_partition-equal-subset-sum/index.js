/**
 * Problem: https://leetcode.com/problems/partition-equal-subset-sum/description/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  var sum = 0, dp = [[0]];
  nums.forEach(function (num, index) {
    dp[index + 1] = [0];
    sum += num;
  });

  if (sum % 2) return false;
  sum /= 2;

  var flag = false;
  for (var i = 1; i <= nums.length; ++i) {
    var exist = { 0: true };
    flag = false;
    for (var j = 0; j < dp[i - 1].length; ++j) {
      if (dp[i - 1][j] === sum || dp[i - 1][j] + nums[i - 1] === sum ) {
        flag = true;
        break;
      } else {
        if (!exist[dp[i - 1][j]]) {
          exist[dp[i - 1][j]] = true;
          dp[i].push(dp[i - 1][j]);
        }
        if (!exist[dp[i - 1][j] + nums[i - 1]]) {
          exist[dp[i - 1][j] + nums[i - 1]] = true;
          dp[i].push(dp[i - 1][j] + nums[i - 1]);
        }
      }
    }
    if (flag) break;
  }

  return flag;
};
module.exports = canPartition;
