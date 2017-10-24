/**
 * Problem: https://leetcode.com/problems/merge-sorted-array/description/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i = m, j = n, tmp = 1;
  while (i && j) {
    if (nums1[i - 1] >= nums2[j - 1]) {
      nums1[m + n - tmp] = nums1[i - 1];
      --i;
    } else {
      nums1[m + n - tmp] = nums2[j - 1];
      --j;
    }

    ++tmp;
  }

  if (j) {
    while (j) {
      nums1[m + n - tmp] = nums2[j - 1];
      --j;
      ++tmp;
    }
  }
};

module.exports = merge;
