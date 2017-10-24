/**
 * Problem: https://leetcode.com/problems/contains-duplicate-iii/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var flag = false, i, j;
  for (i = 1, len = nums.length; i < len; ++i) {
    for (j = i - 1; i - j <= k && j >= 0; --j) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        flag = true;
        break;
      }
    }
  }
  
  return flag;
};
module.exports = containsNearbyAlmostDuplicate;
