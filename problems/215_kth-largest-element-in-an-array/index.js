/**
 * Problem: https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var len = nums.length, tmp, count = 0;
  nums.unshift(0);
  
  for (;count !== k; ++count) {
    for (var i = parseInt((len - count) / 2) + count; i >= count + 1; --i) {
      if (nums[i * 2 + 1 - count] && nums[i] < nums[i * 2 + 1 - count]) {
        tmp = nums[i * 2 + 1 - count];
        nums[i * 2 + 1 - count] = nums[i];
        nums[i] = tmp;
      }
      if (nums[i] < nums[i * 2 - count]) {
        tmp = nums[i * 2 - count];
        nums[i * 2 - count] = nums[i];
        nums[i] = tmp;
      }
    }
  }
  
  return nums[count];
};
module.exports = findKthLargest;
