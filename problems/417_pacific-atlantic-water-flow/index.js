/**
 * Problem: https://leetcode.com/problems/pacific-atlantic-water-flow/description/
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  if (!matrix.length) return [];

  var m = matrix.length, n = matrix[0].length;
  var visitPac = [], visitAtl = [];

  for (var i = 0; i < m; ++i) {
    visitPac.push([true]);
    visitAtl.push([]);
    visitAtl[i][n - 1] = true;
  }

  for (var i = 0; i < n; ++i) {
    visitPac[0][i] = true;
    visitAtl[m - 1][i] = true;
  }

  var visit = function (i, j, arr) {
    if (matrix[i - 1] && matrix[i - 1][j] !== undefined && matrix[i - 1][j] >= matrix[i][j]) {
      if (!arr[i - 1][j]) {
        arr[i - 1][j] = true;
        visit(i - 1, j, arr);
      }
    }
    if (matrix[i + 1] && matrix[i + 1][j] !== undefined && matrix[i + 1][j] >= matrix[i][j]) {
      if (!arr[i + 1][j]) {
        arr[i + 1][j] = true;
        visit(i + 1, j, arr);
      }
    }

    if (matrix[i][j - 1] !== undefined && matrix[i][j - 1] >= matrix[i][j]) {
      if (!arr[i][j - 1]) {
        arr[i][j - 1] = true;
        visit(i, j - 1, arr);
      }
    }

    if (matrix[i][j + 1] !== undefined && matrix[i][j + 1] >= matrix[i][j]) {
      if (!arr[i][j + 1]) {
        arr[i][j + 1] = true;
        visit(i, j + 1, arr);
      }
    }
  };

  for (var i = 0; i < m; ++i) {
    visit(i, 0, visitPac);
    visit(i, n - 1, visitAtl);
  }

  for (var i = 0; i < n; ++i) {
    visit(0, i, visitPac);
    visit(m - 1, i, visitAtl);
  }

  var result = [];
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (visitPac[i][j] && visitAtl[i][j]) result.push([i, j]);
    }
  }

  return result;
};
module.exports = pacificAtlantic;
