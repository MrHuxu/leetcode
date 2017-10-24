/**
 * Problem: https://leetcode.com/problems/surrounded-regions/description/
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || !board.length) return;
  var lenX = board[0].length, lenY = board.length;
  var visited = [];
  for (var i = 0; i < lenY; ++i) visited[i] = [];

  var recursion = function (nodes) {
    if (!nodes.length) return;
    var widerNodes = [];
    for (var i = 0, len = nodes.length; i < len; ++i) {
      if (!visited[nodes[i][0]][nodes[i][1]]) {
        visited[nodes[i][0]][nodes[i][1]] = true;
        if (board[nodes[i][0]] && 'O' === board[nodes[i][0]][nodes[i][1] - 1] && !visited[nodes[i][0]][nodes[i][1] - 1])
          widerNodes.push([nodes[i][0], nodes[i][1] - 1]);
        if (board[nodes[i][0] + 1] && 'O' === board[nodes[i][0] + 1][nodes[i][1]] && !visited[nodes[i][0] + 1][nodes[i][1]])
          widerNodes.push([nodes[i][0] + 1, nodes[i][1]]);
        if (board[nodes[i][0]] && 'O' === board[nodes[i][0]][nodes[i][1] + 1] && !visited[nodes[i][0]][nodes[i][1] + 1])
          widerNodes.push([nodes[i][0], nodes[i][1] + 1]);
        if (board[nodes[i][0] - 1] && 'O' === board[nodes[i][0] - 1][nodes[i][1]] && !visited[nodes[i][0] - 1][nodes[i][1]])
          widerNodes.push([nodes[i][0] - 1, nodes[i][1]]);
      }
    }
    recursion(widerNodes);
  };

  var nodes = [];
  for (var i = 0; i < lenX; ++i) {
    if ('O' === board[0][i]) nodes.push([0, i]);
    if ('O' === board[lenY - 1][i]) nodes.push([lenY - 1, i]);
  }
  for (var i = 1; i < lenY - 1; ++i) {
    if ('O' === board[i][0]) nodes.push([i, 0]);
    if ('O' === board[i][lenX - 1]) nodes.push([i, lenX - 1]);
  }
  recursion(nodes);

  for (var i = 0; i < lenY; ++i) {
    for (var j = 0; j < lenX; ++j) {
      board[i][j] = visited[i][j] ? 'O' : 'X';
    }
  }
};
module.exports = solve;
