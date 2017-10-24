/**
 * Problem: https://leetcode.com/problems/spiral-matrix/description/
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (0 === matrix.length)
    return [];
  var m = matrix.length;
  var used = matrix.map(function () { return []; });
  var n = matrix[0].length;
  var i, j, k, l, result = [];
  for (l = 0; l < m / 2 && l < n / 2; ++l) {
    for (i = l; i <= n - 1 - l; ++i) {
      if (!used[l][i]) {
        result.push(matrix[l][i]);
        used[l][i] = true;
      }
    }
    for (i = l; i <= m - 1 - l; ++i) {
      if (!used[i][n - 1 - l]) {
        result.push(matrix[i][n - 1 - l]);
        used[i][n - 1 - l] = true;
      }
    }
    for (i = l; i <= n - 1 - l; ++i) {
      if (!used[m - 1 - l][n - 1 - i]) {
        result.push(matrix[m - 1 - l][n - 1 - i]);
        used[m - 1 - l][n - 1 - i] = true;
      }
    }
    for (i = l; i <= m - 1 - l; ++i) {
      if (!used[m - 1 - i][l]) {
        result.push(matrix[m - 1 - i][l]);
        used[m - 1 - i][l] = true;
      }
    }
  }
  return result;
};

module.exports = spiralOrder;
