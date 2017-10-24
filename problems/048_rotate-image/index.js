/**
 * Problem: https://leetcode.com/problems/rotate-image/description/
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var n = matrix.length, tmp;
  var i, j, k;
  for (i = 0, j = n - 1; i <= j; ++i, --j) {
    k = i;
    for (k = i; k < j; ++k) {
      tmp = matrix[j - k + i][i];
      matrix[j - k + i][i] = matrix[j][j - k + i];
      matrix[j][j - k + i] = matrix[k][j];
      matrix[k][j] = matrix[i][k];
      matrix[i][k] = tmp;
    }
  }
};

module.exports = rotate;
