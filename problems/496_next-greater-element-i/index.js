/**
 * Problem: https://leetcode.com/problems/next-greater-element-i/description/
 */
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  var next = {};
  for (var i = 0; i < nums.length; ++i) {
    next[nums[i]] = -1;
    for (var j = 0; j < i; ++j) {
      if (nums[j] < nums[i] && -1 === next[nums[j]]) {
        next[nums[j]] = nums[i];
      }
    }
  }

  return findNums.map(function(findNum) {
    return next[findNum];
  });
};
module.exports = nextGreaterElement;
