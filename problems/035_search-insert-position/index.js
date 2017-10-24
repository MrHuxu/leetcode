/**
 * Problem: https://leetcode.com/problems/search-insert-position/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var result;
  if (0 === nums.length) {
    result = 0;
  } else {
    if (nums[0] > target)
      result = 0;
    else if (nums[nums.length - 1] < target)
      result = nums.length;
    else {
      for (var i = 0, l = nums.length; i < l; ++i) {
        if (nums[i] === target) {
          result = i;
          break;
        } else {
          if (nums[i] < target && (nums[i + 1] > target || nums[i + 1] === undefined)) {
            result = i + 1;
            break;
          }
        }
      }
    }
  }
  return result;
};

module.exports = searchInsert;
