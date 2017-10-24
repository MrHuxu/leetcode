/**
 * Problem: https://leetcode.com/problems/missing-number/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var len = nums.length;
  var totalSum = (1 + len) * len / 2, sum = 0;
  for (var i = 0; i < len; ++i) sum += nums[i];
  return totalSum - sum;
};
module.exports = missingNumber;
