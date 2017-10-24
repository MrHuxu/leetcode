/**
 * Problem: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 * the most simple solution by JS
  var findMin = function(nums) {
    return Math.min.apply(null, nums);
  };
 */
var findMin = function(nums) {
  var head = 0, tail = nums.length - 1;
  var mid;

  while (tail - head > 0) {
    mid = parseInt((tail - head) / 2) + head;
    if (nums[mid] >= nums[head] && nums[tail] <= nums[head]) head = mid + 1;
    else tail = mid;
  }

  return nums[head];
};
module.exports = findMin;
