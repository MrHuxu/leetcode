/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var result = 0;

  for (var i = 0, len = nums.length; i < len; ++i) {
    if (nums[i] !== nums[i - 1]) {
      nums[result] = nums[i];
      ++result;
    } else {
      var step = 0;
      while (nums[i + step] === nums[i]) ++step;
      i += step - 1;
      nums[result] = nums[i];
      ++result;
    }
  }

  return result;
};
module.exports = removeDuplicates;
