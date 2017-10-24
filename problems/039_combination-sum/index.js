/**
 * Problem: https://leetcode.com/problems/combination-sum/description/
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var result = [], tmp;
  candidates.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  var dfs = function (index, left, arr) {
    if (0 === left) {
      result.push(arr);
      for (var i = index - 1; i >= 0; --i) {
        tmp = arr.slice(0);
        tmp.unshift(candidates[i]);
        dfs(i, left - candidates[i], tmp);
      }
    } else if (left > 0) {
      for (var i = index; i >= 0; --i) {
        if (left >= candidates[i]) {
          tmp = arr.slice(0);
          tmp.unshift(candidates[i]);
          dfs(i, left - candidates[i], tmp);
        }
      }
    }
  };
  dfs(candidates.length - 1, target, []);
  return result;
};

module.exports = combinationSum;
