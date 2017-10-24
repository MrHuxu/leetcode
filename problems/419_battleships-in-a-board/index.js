/**
 * Problem: https://leetcode.com/problems/battleships-in-a-board/description/
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  var result = 0;
  var m = board.length, n = board[0] && board[0].length, i, j;

  var check = function (i, j) {
    return (board[i - 1] && 'X' === board[i - 1][j]) || (board[i][j - 1] && 'X' === board[i][j - 1]);
  };

  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      if ('X' === board[i][j] && !check(i, j)) ++result;
    }
  }

  return result;
};

module.exports = countBattleships;
