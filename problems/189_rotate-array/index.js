/**
 * Problem: https://leetcode.com/problems/rotate-array/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  Array.prototype.unshift.apply(nums, nums.splice(nums.length - k, k));
};
module.exports = rotate;
