/**
 * Problem: https://leetcode.com/problems/number-of-islands/description/
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(board) {
  if (!board || !board.length) return 0;
  var lenX = board[0].length, lenY = board.length;
  var visited = [], result = 0;
  for (var i = 0; i < lenY; ++i) visited[i] = [];

  var recursion = function (nodes) {
    if (!nodes.length) return;
    var widerNodes = [];
    for (var i = 0, len = nodes.length; i < len; ++i) {
      if (!visited[nodes[i][0]][nodes[i][1]]) {
        visited[nodes[i][0]][nodes[i][1]] = true;
        if (board[nodes[i][0]] && '1' === board[nodes[i][0]][nodes[i][1] - 1] && !visited[nodes[i][0]][nodes[i][1] - 1])
          widerNodes.push([nodes[i][0], nodes[i][1] - 1]);
        if (board[nodes[i][0] + 1] && '1' === board[nodes[i][0] + 1][nodes[i][1]] && !visited[nodes[i][0] + 1][nodes[i][1]])
          widerNodes.push([nodes[i][0] + 1, nodes[i][1]]);
        if (board[nodes[i][0]] && '1' === board[nodes[i][0]][nodes[i][1] + 1] && !visited[nodes[i][0]][nodes[i][1] + 1])
          widerNodes.push([nodes[i][0], nodes[i][1] + 1]);
        if (board[nodes[i][0] - 1] && '1' === board[nodes[i][0] - 1][nodes[i][1]] && !visited[nodes[i][0] - 1][nodes[i][1]])
          widerNodes.push([nodes[i][0] - 1, nodes[i][1]]);
      }
    }
    recursion(widerNodes);
  };

  for (var i = 0; i < lenY; ++i) {
    for (var j = 0; j < lenX; ++j) {
      if ('1' === board[i][j] && !visited[i][j]) {
        ++result;
        recursion([[i, j]]);
      }
    }
  }

  return result;
};
module.exports = numIslands;
