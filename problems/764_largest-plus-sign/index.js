/**
 * Problem: https://leetcode.com/problems/largest-plus-sign/description/
 */

const largestPlusSign = (N, mines) => {
  const minesObj = mines.reduce((pre, mine) => {
    pre[mine[0]] = { ...(pre[mine[0]] ? pre[mine[0]] : {}), [mine[1]]: true };
    return pre;
  }, {});
  const board = [];
  for (let i = 0; i < N; i++) {
    board[i] = [];
    for (let j = 0; j < N; j++) {
      if (minesObj[i] && minesObj[i][j]) {
        board[i][j] = 0;
      } else {
        board[i][j] = 1;
      }
    }
  }

  const checkPoint = (i, j, k) => {
    while (--k >= 0) {
      if (!(board[i - k][j] && board[i + k][j] && board[i][j - k] && board[i][j + k]))
        return false;
    }
    return true;
  };

  let res = 0;
  while (2 * res - 1 <= N) {
    if (res) {
      let flag = false;
      for (let i = res - 1; i < N - res + 1; i++) {
        for (let j = res - 1; j < N - res + 1; j++) {
          if (board[i][j] && checkPoint(i, j, res)) {
            flag = true;
            break;
          }
        }
        if (flag) break;
      }

      if (flag) res++;
      else return res - 1;
    } else {
      res++;
    }
  }
  return res - 1;
};

module.exports = largestPlusSign;
