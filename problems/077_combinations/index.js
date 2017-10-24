/**
 * Problem: https://leetcode.com/problems/combinations/description/
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var result = [];
  var used = {};
  var dfs = function (arr, used) {
    if (arr.length === k)
      result.push(arr);
    else {
      var start = 0 === arr.length ? 1 : (arr[arr.length - 1] + 1);
      for (var i = start; i <= n; ++i) {
        if (!used[i]) {
          var tmp = arr.slice(0);
          tmp.push(i);
          var str = JSON.stringify(used);
          obj = JSON.parse(str);
          obj[i] = true;
          dfs(tmp, obj);
        }
      }
    }
  };
  dfs([], {});
  return result;
};

module.exports = combine;
