/**
 * Problem: https://leetcode.com/problems/range-sum-query-2d-immutable/description/
 */
/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (matrix.length < 1) {
    this.sums = [[0]];
    return;
  }
  this.sums = [], this.data = matrix;
  var i, j, m = matrix.length, n = matrix[0].length;
  var tmp1, tmp2, tmp3;
  
  for (i = 0; i < m; ++i) {
    this.sums[i] = [];
    for (j = 0; j < n; ++j) {
      tmp1 = (this.sums[i - 1] === undefined || this.sums[i - 1][j - 1] === undefined) ? 0 : this.sums[i - 1][j - 1];
      tmp2 = (this.sums[i - 1] === undefined || this.sums[i - 1][j] === undefined) ? 0 : this.sums[i - 1][j];
      tmp3 = this.sums[i][j - 1] === undefined ? 0 : this.sums[i][j - 1];
      this.sums[i][j] = tmp2 - tmp1 + tmp3 + this.data[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  var sum = this.sums[row2][col2];
  var tmp1, tmp2, tmp3;
  
  tmp1 = (this.sums[row1 - 1] === undefined || this.sums[row1 - 1][col1 - 1] === undefined) ? 0 : this.sums[row1 - 1][col1 - 1];
  tmp2 = this.sums[row1 - 1] === undefined ? 0 : this.sums[row1 - 1][col2];
  tmp3 = this.sums[row2][col1 - 1] === undefined ? 0 : this.sums[row2][col1 - 1];
  
  return sum - tmp2 - (tmp3 - tmp1);
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */

var numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);
module.exports = numMatrix.sumRegion.bind(numMatrix);
