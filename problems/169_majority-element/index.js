/**
 * Problem: https://leetcode.com/problems/majority-element/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = {}, len = nums.length, result;
  for (var i = 0; i < len; ++i) {
    map[nums[i]] = map[nums[i]] === undefined ? 1 : ++map[nums[i]];
    if (map[nums[i]] > len / 2) {
      result = nums[i];
      break;
    }
  }
  return result;
};
module.exports = majorityElement;
