/**
 * Problem: https://leetcode.com/problems/game-of-life/description/
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  var m = board.length, n = board[0].length;
  var result = [], i, j, k, liveNum;
  for (i = 0; i < m; ++i) result.push([]);
  
  var visit = function (x, y) {
    var count = 0;
    for (k = x - 1; k <= x + 1; ++k) {
      if (board[k] && 1 == board[k][y - 1]) ++count;
      if (board[k] && 1 == board[k][y + 1]) ++count;
    }
    if (board[x - 1] && 1 == board[x - 1][y]) ++count;
    if (board[x + 1] && 1 == board[x + 1][y]) ++count;
    return count;
  };
  
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      liveNum = visit(i, j);
      if (1 == board[i][j] && liveNum < 2) result[i][j] = 0;
      if (1 == board[i][j] && (2 == liveNum || 3 == liveNum)) result[i][j] = 1;
      if (1 == board[i][j] && liveNum > 3) result[i][j] = 0;
      if (0 == board[i][j] && 3 == liveNum) result[i][j] = 1;
    }
  }
  
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      board[i][j] = result[i][j] === undefined ? board[i][j] : result[i][j];
    }
  }
};
module.exports = gameOfLife;
