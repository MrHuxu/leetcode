/**
 * Problem: https://leetcode.com/problems/minimum-path-sum/description/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var values = [];
  var m = grid.length;
  var n = grid[0].length;
  for (var i = 0; i < m; ++i) {
    values[i] = [];
  }
  var queue = [[0, 0]];
  values[0][0] = grid[0][0];

  while (queue.length) {
    var node = queue[0];
    var x = node[0];
    var y = node[1];

    if (grid[x + 1] !== undefined) {
      var value = values[x][y] + grid[x + 1][y];
      if (values[x + 1][y] === undefined) queue.push([x + 1, y]);
      if (values[x + 1][y] === undefined || value < values[x + 1][y]) values[x + 1][y] = value;
    }

    if (grid[x][y + 1] !== undefined) {
      var value = values[x][y] + grid[x][y + 1];
      if (values[x][y + 1] === undefined) queue.push([x, y + 1]);
      if (values[x][y + 1] === undefined || value < values[x][y + 1]) values[x][y + 1] = value;
    }

    queue.shift();
  }

  return values[m - 1][n - 1];
};
module.exports = minPathSum;
