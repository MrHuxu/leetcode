/**
 * Problem: https://leetcode.com/problems/subsets-ii/description/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  var result = [], used = {}, l = nums.length;
  var dfs = function (idx, arr) {
    if (idx < l) {
      result.push(arr);
      for (var i = idx + 1; i < l; ++i) {
        var tmp = arr.slice(0);
        tmp.push(nums[i]);
        dfs(i, tmp);

        var cursor = 0;
        while (nums[i + cursor + 1] === nums[i]) {
          ++cursor;
        }
        i += cursor;
      }
    } else
      return;
  };
  dfs(-1, []);
  return result;
};
module.exports = subsetsWithDup;
