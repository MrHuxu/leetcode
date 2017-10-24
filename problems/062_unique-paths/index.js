/**
 * Problem: https://leetcode.com/problems/unique-paths/description/
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var result = [];
  for (var i = 0; i < m; ++i) result.push([]);
  for (var i = 0; i < m; ++i) result[i][0] = 1;
  for (var i = 0; i < n; ++i) result[0][i] = 1;
  for (var i = 1; i < m; ++i)
    for (var j = 1; j < n; ++j)
      result[i][j] = result[i - 1][j] + result[i][j - 1];
  return result[m - 1][n - 1];
};

module.exports = uniquePaths;
