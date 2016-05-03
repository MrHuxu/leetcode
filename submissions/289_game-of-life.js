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
      if (board[k] && board[k][y - 1] == 1) ++count;
      if (board[k] && board[k][y + 1] == 1) ++count;
    }
    if (board[x - 1] && board[x - 1][y] == 1) ++count;
    if (board[x + 1] && board[x + 1][y] == 1) ++count;
    return count;
  }
  
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      liveNum = visit(i, j);
      if (board[i][j] == 1 && liveNum < 2) result[i][j] = 0;
      if (board[i][j] == 1 && (liveNum == 2 || liveNum == 3)) result[i][j] = 1;
      if (board[i][j] == 1 && liveNum > 3) result[i][j] = 0;
      if (board[i][j] == 0 && liveNum == 3) result[i][j] = 1;
    }
  }
  
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      board[i][j] = result[i][j] === undefined ? board[i][j] : result[i][j];
    }
  }
};