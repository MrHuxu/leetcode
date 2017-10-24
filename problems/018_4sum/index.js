/**
 * Problem: https://leetcode.com/problems/4sum/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var result = [], map = {}, i, j, k, l, tmp, left, right;
  for (i = 0, l = nums.length; i < l; ++i) {
    if (map[nums[i]])
      map[nums[i]].push(i);
    else
      map[nums[i]] = [i];
  }
  nums.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  for (i = 0; i < l - 3; ++i) {
    for (j = i + 1; j < l - 2; ++j) {
      for (left = j + 1, right = l -1; left < right;) {
        tmp = nums[i] + nums[j] + nums[left] + nums[right];
        if (tmp === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left + 1] === nums[left]) ++left;
          while (nums[right - 1] === nums[right]) --right;
          ++left;
          --right;
        } else if (tmp > target) {
          while (nums[right - 1] === nums[right]) --right;
          --right;
        } else {
          while (nums[left + 1] === nums[left]) ++left;
          ++left;
        }
      }
      while (nums[j + 1] === nums[j]) ++j;
    }
    while (nums[i + 1] === nums[i]) ++i;
  }
  result.sort(function (a, b) {
    var tmpa = {}, tmpb = {}, seqa = [], seqb = [];
    for (i = 0; i < 4; ++i) {
      if (!tmpa[a[i]]) {
        tmpa[a[i]] = -1;
      }
      seqa.push(map[a[i]][++tmpa[a[i]]]);
      if (!tmpb[b[i]]) {
        tmpb[b[i]] = -1;
      }
      seqb.push(map[b[i]][++tmpb[b[i]]]);
    }
    seqa.sort();
    seqb.sort();
    i = 0;
    while (seqa[i] === seqb[i]) i++;
    return seqa[i] < seqb[i] ? -1 : 1;
  });
  return result;
};

module.exports = fourSum;
