var exist = function (board, word) {
  var flag = false, tmpArr, tmpUsed;

  var markPositon = function (used, x, y) {
    var tmpStr = JSON.stringify(used);
    var tmpObj = JSON.parse(tmpStr);
    if (tmpObj[x])
      tmpObj[x].push(y);
    else
      tmpObj[x] = [y];
    return tmpObj;
  };

  var dfs = function (x, y, ptr, used) {
    if (ptr === word.length) {
      console.log(x, '====', y)
      flag = true;
    }

    if (flag)
      return;
    else {
      if (!flag && board[x - 1] && board[x - 1][y] && board[x - 1][y] === word[ptr]) {
        if (!(used[x - 1] && used[x - 1].indexOf(y) !== -1)) {
          tmpUsed = markPositon(used, x - 1, y);
          dfs(x - 1, y, ptr + 1, tmpUsed);
        }
      }
      if (!flag && board[x + 1] && board[x + 1][y] && board[x + 1][y] === word[ptr]) {
        if (!(used[x + 1] && used[x + 1].indexOf(y) !== -1)) {
          tmpUsed = markPositon(used, x + 1, y);
          dfs(x + 1, y, ptr + 1, tmpUsed);
        }
      }
      if (!flag && board[x][y - 1] && board[x][y - 1] === word[ptr]) {
        if (!(used[x] && used[x].indexOf(y - 1) !== -1)) {
          tmpUsed = markPositon(used, x, y - 1);
          dfs(x, y - 1, ptr + 1, tmpUsed);
        }
      }
      if (!flag && board[x][y + 1] && board[x][y + 1] === word[ptr]) {
        if (!(used[x] && used[x].indexOf(y + 1) !== -1)) {
          tmpUsed = markPositon(used, x, y + 1);
          dfs(x, y + 1, ptr + 1, tmpUsed);
        }
      }
      return;
    }
  };

  var m = board.length, n = board[0].length;
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (!flag && board[i][j] === word[0]) {
        tmpObj = {};
        tmpObj[i] = [j];
        dfs(i, j, 1, tmpObj);
      }
    }
  }
  
  return flag;
};

var board = ["aaaa","aaaa","aaaa","aaaa","aaab"]

console.log(exist(board, "aaaaaaaaaaaaaaaaaaaa"));