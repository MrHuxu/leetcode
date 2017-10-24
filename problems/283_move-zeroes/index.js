/**
 * Problem: https://leetcode.com/problems/move-zeroes/description/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var pos1, pos2, tmp, i, len = nums.length;

  for (i = 0; i < len; ++i) {
    if (0 === nums[i]) {
      pos1 = pos2 = i;
      break;
    }
  }

  if (pos1 !== undefined) {
    while (true) {
      while (0 === nums[pos2]) ++pos2;
      if (pos2 === len) break;

      tmp = nums[pos1];
      nums[pos1] = nums[pos2];
      nums[pos2] = tmp;

      while (nums[pos1] !== 0) ++pos1;
    }
  }
};
module.exports = moveZeroes;
