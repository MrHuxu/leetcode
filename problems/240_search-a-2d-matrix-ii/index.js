/**
 * Problem: https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  var m = matrix.length, n = matrix[0].length;
  var i, j, flag = false;
  
  for (i = 0, j = n - 1; i < m && j >= 0;) {
    if (matrix[i][j] === target) {
      flag = true;
      break;
    } else if (matrix[i][j] < target) {
      ++i;
    } else {
      --j;
    }
  }
  
  return flag;
};
module.exports = searchMatrix;
