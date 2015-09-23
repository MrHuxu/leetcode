var exist = function (board, word) {
  var wordArr = word.split('');
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

  var removeLetter = function (arr) {
    var tmp = arr.slice(0);
    tmp.shift();
    return tmp;
  };

  var dfs = function (x, y, arr, used) {
    if (arr.length) {
      if (flag)
        return;
      else {
        if (board[x - 1] && board[x - 1][y] && board[x - 1][y] === arr[0]) {
          if (!(used[x - 1] && used[x - 1].indexOf(y) !== -1)) {
            tmpArr = removeLetter(arr);
            tmpUsed = markPositon(used, x - 1, y);
            dfs(x - 1, y, tmpArr, tmpUsed);
          }
        }
        if (board[x + 1] && board[x + 1][y] && board[x + 1][y] === arr[0]) {
          if (!(used[x + 1] && used[x + 1].indexOf(y) !== -1)) {
            tmpArr = removeLetter(arr);
            tmpUsed = markPositon(used, x + 1, y);
            dfs(x + 1, y, tmpArr, tmpUsed);
          }
        }
        if (board[x][y - 1] && board[x][y - 1] === arr[0]) {
          if (!(used[x] && used[x].indexOf(y - 1) !== -1)) {
            tmpArr = removeLetter(arr);
            tmpUsed = markPositon(used, x, y - 1);
            dfs(x, y - 1, tmpArr, tmpUsed);
          }
        }
        if (board[x][y + 1] && board[x][y + 1] === arr[0]) {
          if (!(used[x] && used[x].indexOf(y + 1) !== -1)) {
            tmpArr = removeLetter(arr);
            tmpUsed = markPositon(used, x, y + 1);
            dfs(x, y + 1, tmpArr, tmpUsed);
          }
        }
        return;
      }
    } else {
      flag = true;
      return;
    }
  };

  var m = board.length, n = board[0].length;
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (board[i][j] === wordArr[0]) {
        tmpArr = removeLetter(wordArr);
        dfs(i, j, tmpArr, {});
      }
    }
  }
  
  return flag;
};

var board = [
  "aa"
];

console.log(exist(board, 'aa'));