/**
 * Problem: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let start, end, max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < max) {
      end = i;
      let pos = i - 1;
      while (nums[i] < nums[pos]) --pos;
      start = start === undefined ? pos + 1 : Math.min(pos + 1, start);
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }

  return end ? (end - start + 1) : 0;
};
module.exports = findUnsortedSubarray;
