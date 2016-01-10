/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  var queue = [[0, 0]], depth = 0;
  var values = [];
  for (var i = 0, len = grid.length; i < len; ++i) {
    values[i] = [];
  }

  while (queue.length) {
    
  }

  var bfs = function (x, y, values) {
  }
};

var grid = [
  [1, 2, 4],
  [2, 3, 1],
  [6, 2, 7]
];

console.log(minPathSum(grid));