/**
 * Problem: https://leetcode.com/problems/redundant-connection/description/
 */

const redundantConnection = edges => {
  const board = [];
  let N = 0;
  for (let edge of edges) {
    if (!board[edge[0]]) board[edge[0]] = [];
    if (!board[edge[1]]) board[edge[1]] = [];
    board[edge[0]][edge[0]] = board[edge[1]][edge[1]] = 1;
    N = Math.max(N, edge[1]);
  }
  
  for (let edge of edges) {
    const [from, to] = edge;
    if (board[from][to]) return edge;

    board[from][to] = 1;
    for (let i = 1; i <=N; i++) {
      if (board[from][i] || board[i][to]) {
        for (let j = 1; j <= N; j++) {
          if (board[from][j] || board[j][to]) board[i][j] = board[j][i] = 1;
        }
      }
    }
  }
};

module.exports = redundantConnection;
