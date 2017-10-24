/**
 * Problem: https://leetcode.com/problems/minesweeper/description/
 */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  var getMineAmount = function (x, y) {
    var result = 0;
    if (board[x - 1]) {
      for (var i = y - 1; i <= y + 1; ++i) {
        if ('M' === board[x - 1][i]) ++result;
      }
    }
    if (board[x + 1]) {
      for (var i = y - 1; i <= y + 1; ++i) {
        if ('M' === board[x + 1][i]) ++result;
      } 
    }
    if ('M' === board[x][y - 1]) ++result;
    if ('M' === board[x][y + 1]) ++result;
    return result;
  };

  var visit = function (x, y) {
    var mineAmount = getMineAmount(x, y);
    if (mineAmount)
      board[x][y] = mineAmount;
    else {
      board[x][y] = 'B';
      if (board[x - 1]) {
        for (var i = y - 1; i <= y + 1; ++i) {
          if ('E' === board[x - 1][i]) visit(x - 1, i);
        }
      }
      if (board[x + 1]) {
        for (var i = y - 1; i <= y + 1; ++i) {
          if ('E' === board[x + 1][i]) visit(x + 1, i);
        } 
      }
      if ('E' === board[x][y - 1]) visit(x, y - 1);
      if ('E' === board[x][y + 1]) visit(x, y + 1);
    }
  };

  if ('M' === board[click[0]][click[1]]) {
    board[click[0]][click[1]] = 'X';
  } else if ('E' === board[click[0]][click[1]]) {
    visit(click[0], click[1]);
  }

  return board;
};

module.exports = updateBoard;
