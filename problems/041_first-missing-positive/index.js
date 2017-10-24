/**
 * Problem: https://leetcode.com/problems/first-missing-positive/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; ++i) {
    map [nums[i]] = true;
  }
  var start = 0;
  while (++start) {
    if (!map[start])
      break;
  }
  return start;
};

module.exports = firstMissingPositive;
