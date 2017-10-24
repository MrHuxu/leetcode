/**
 * Problem: https://leetcode.com/problems/palindrome-partitioning/description/
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  var result = [];
  var cache = {};
  var tmp;

  var isPalin = function (start, end) {
    if (cache[start + ',' + end] === undefined) {
      for (;start <= end; ++start, --end) {
        if (s[start] !== s[end]) break;
      }
      cache[start + ',' + end] = start > end;
    }

    return cache[start + ',' + end];
  };

  var dfs = function (start, arr) {
    if (start === s.length) {
      result.push(arr);
    } else {
      var str = '';
      for (var i = start, l = s.length; i < l; ++i) {
        str += s[i];
        if (isPalin(start, i)) {
          tmp = arr.slice();
          tmp.push(str);
          dfs(i + 1, tmp);
        }
      }
    }
  };
  dfs(0, []);

  return result;
};
module.exports = partition;
