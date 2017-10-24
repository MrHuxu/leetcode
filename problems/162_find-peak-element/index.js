/**
 * Problem: https://leetcode.com/problems/find-peak-element/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  var len = nums.length;
  if (nums[0] > nums[1]) return 0;
  if (nums[len - 1] > nums[len - 2]) return len - 1;

  var head = 0, tail = len - 1;
  while (head <= tail) {
    var mid = parseInt((tail - head) / 2) + head;
    if (nums[mid - 1] > nums[mid])
      tail = mid;
    else if (nums[mid + 1] > nums[mid])
      head = mid;
    else
      break;
  }

  return mid;
};
module.exports = findPeakElement;
