/**
 * Problem: https://leetcode.com/problems/lexicographical-numbers/description/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  var result = [];

  var dfs = function (num) {
    if (num <= n) {
      result.push(num);
      if (num * 10 <= n) {
        for (var j = 0; j <= 9; ++j) {
          dfs(num * 10 + j);
        }
      }
    }
  };
  for (var i = 1; i <= 9; ++i) dfs(i);

  return result;
};
module.exports = lexicalOrder;
