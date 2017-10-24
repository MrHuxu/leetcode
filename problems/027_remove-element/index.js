/**
 * Problem: https://leetcode.com/problems/remove-element/description/
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var i = 0, j = nums.length; i < j; ++i) {
    if (nums[i] === val) {
      tmp = nums[j - 1];
      nums[j - 1] = val;
      nums[i] = tmp;
      --j;
      --i;
    }
  }
  return j;
};

module.exports = removeElement;
