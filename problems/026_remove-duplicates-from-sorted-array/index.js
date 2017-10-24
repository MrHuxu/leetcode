/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || 0 === nums.length) return 0;
  var count = 0;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[count]) {
      nums[count + 1] = nums[i];
      ++count;
    }
  }
  return count + 1;
};

module.exports = removeDuplicates;
