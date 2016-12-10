var countBattleships = function(board) {
  var result = 0;
  var m = board.length, n = board[0] && board[0].length, i, j;

  var check = function (i, j) {
    return (board[i - 1] && board[i - 1][j] === 'X') || (board[i][j - 1] && board[i][j - 1] === 'X');
  }

  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      if (board[i][j] === 'X' && !check(i, j)) ++result;
    }
  }

  return result;
};

console.log(countBattleships([
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X']
]));
console.log(countBattleships(['X', 'X', 'X']));