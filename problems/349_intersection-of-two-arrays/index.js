/**
 * Problem: https://leetcode.com/problems/intersection-of-two-arrays/description/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var exist = {}, result = [];
  var i, len1 = nums1.length, len2 = nums2.length;
  
  for (i = 0; i < len1; ++i) {
    exist[nums1[i]] = true;
  }
  
  for (i = 0; i < len2; ++i) {
    if (exist[nums2[i]]) {
      result.push(nums2[i]);
      exist[nums2[i]] = false;
    }
  }
  
  return result;
};
module.exports = intersection;
