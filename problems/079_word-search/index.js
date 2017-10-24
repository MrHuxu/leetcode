/**
 * Problem: https://leetcode.com/problems/word-search/description/
 */
var exist = function (board, word) {
  var flag = false;
  var used = [];
  for (var i = 0, len = board.length; i < len; ++i) {
    used[i] = [];
  }

  var dfs = function (x, y, ptr, used) {
    if (ptr === word.length) {
      flag = true;
    }

    if (flag)
      return;
    else {
      if (!flag && board[x - 1] && board[x - 1][y] && board[x - 1][y] === word[ptr]) {
        if (used[x - 1] && !used[x - 1][y]) {
          used[x - 1][y] = 1;
          dfs(x - 1, y, ptr + 1, used);
          used[x - 1][y] = 0;
        }
      }
      if (!flag && board[x + 1] && board[x + 1][y] && board[x + 1][y] === word[ptr]) {
        if (used[x + 1] && !used[x + 1][y]) {
          used[x + 1][y] = 1;
          dfs(x + 1, y, ptr + 1, used);
          used[x + 1][y] = 0;
        }
      }
      if (!flag && board[x][y - 1] && board[x][y - 1] === word[ptr]) {
        if (!used[x][y - 1]) {
          used[x][y - 1] = 1;
          dfs(x, y - 1, ptr + 1, used);
          used[x][y - 1] = 0;
        }
      }
      if (!flag && board[x][y + 1] && board[x][y + 1] === word[ptr]) {
        if (!used[x][y + 1]) {
          used[x][y + 1] = 1;
          dfs(x, y + 1, ptr + 1, used);
          used[x][y + 1] = 0;
        }
      }
      return;
    }
  };

  var m = board.length, n = board[0].length;
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (!flag && board[i][j] === word[0]) {
        used[i][j] = 1;
        dfs(i, j, 1, used);
        used[i][j] = 0;
      }
    }
  }
  
  return flag;
};
module.exports = exist;
