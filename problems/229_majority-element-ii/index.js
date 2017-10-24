/**
 * Problem: https://leetcode.com/problems/majority-element-ii/description/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var maj = [], count = [];
  var result = [];
  
  for (var i = 0, len = nums.length; i < len; ++i) {
    if (maj[0] !== undefined && maj[1] !== undefined) {
      if (nums[i] === maj[0])
        ++count[0];
      else if (nums[i] === maj[1])
        ++count[1];
      else if (0 === count[0]) {
        maj[0] = nums[i];
        count[0] = 1;
      } else if (0 === count[1]) {
        maj[1] = nums[i];
        count[1] = 1;
      } else {
        --count[0];
        --count[1];
      }
    } else {
      if (maj[0] === undefined) {
        maj[0] = nums[i];
        count[0] = 1;
      } else if (nums[i] === maj[0]) {
        ++count[0];
      } else if (maj[1] === undefined) {
        maj[1] = nums[i];
        count[1] = 1;
      }
    }
  }
  
  count = [0, 0];
  for (i = 0; i < len; ++i) {
    if (nums[i] === maj[0]) ++count[0];
    if (nums[i] === maj[1]) ++count[1];
  }
  
  if (count[0] > ~~(len / 3)) result.push(maj[0]);
  if (count[1] > ~~(len / 3)) result.push(maj[1]);
  
  return result;
};
module.exports = majorityElement;
