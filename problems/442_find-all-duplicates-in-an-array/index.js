/**
 * Problem: https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var result = [];
  for (var i = 0; i < nums.length; ++i) {
    var index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }

  return result;
};

module.exports = findDuplicates;
