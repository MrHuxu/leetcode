/**
 * Problem: https://leetcode.com/problems/find-pivot-index/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const sum = nums.reduce((pre, num) => pre + num, 0);

  let left = 0, right = sum - nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (left === right) return i;
    else {
      left += nums[i];
      right -= nums[i + 1];
    }
  }
  return -1;
};

module.exports = pivotIndex;
