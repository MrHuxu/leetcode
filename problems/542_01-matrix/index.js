/**
 * Problem: https://leetcode.com/problems/01-matrix/description/
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  var result = [], nodes = [], init = 1;

  var collectNodes = function ([x, y]) {
    if (matrix[x - 1] && matrix[x - 1][y]) {
      if (result[x - 1][y] === undefined) {
        result[x - 1][y] = init;
        nodes.push([x - 1, y]);
      }
    }

    if (matrix[x][y - 1]) {
      if (result[x][y - 1] === undefined) {
        result[x][y - 1] = init;
        nodes.push([x, y - 1]);
      }
    }

    if (matrix[x + 1] && matrix[x + 1][y]) {
      if (result[x + 1][y] === undefined) {
        result[x + 1][y] = init;
        nodes.push([x + 1, y]);
      }
    }

    if (matrix[x][y + 1]) {
      if (result[x][y + 1] === undefined) {
        result[x][y + 1] = init;
        nodes.push([x, y + 1]);
      }
    }
  };

  for (var i = 0; i < matrix.length; ++i) result.push([]);

  matrix.forEach(function (row, i) {
    row.forEach(function (col, j) {
      if (!col) {
        result[i][j] = 0;
        collectNodes([i, j]);
      }
    });
  });

  while (nodes.length) {
    ++init;
    var temp = [].concat(nodes), nodes = [];
    temp.forEach(collectNodes);
  }

  return result;
};

module.exports = updateMatrix;
