/**
 * Problem: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let min = sum = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    sum += nums[i];
    min = Math.min(min, nums[i]);
  }

  return sum - min * nums.length;
};
module.exports = minMoves;
