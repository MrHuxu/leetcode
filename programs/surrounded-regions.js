var solve = function(board) {
  if (!board || !board.length) return;
  var lenX = board[0].length, lenY = board.length;
  var visited = [];
  for (var i = 0; i < lenY; ++i) visited[i] = [];

  var recursion = function (nodes) {
    if (!nodes.length) return;
    var widerNodes = [];
    for (var i = 0, len = nodes.length; i < len; ++i) {
      visited[nodes[i][0]][nodes[i][1]] = true;
      if (board[nodes[i][0]] && board[nodes[i][0]][nodes[i][1] - 1] === 'O' && !visited[nodes[i][0]][nodes[i][1] - 1])
        widerNodes.push([nodes[i][0], nodes[i][1] - 1]);
      if (board[nodes[i][0] + 1] && board[nodes[i][0] + 1][nodes[i][1]] === 'O' && !visited[nodes[i][0] + 1][nodes[i][1]])
        widerNodes.push([nodes[i][0] + 1, nodes[i][1]]);
      if (board[nodes[i][0]] && board[nodes[i][0]][nodes[i][1] + 1] === 'O' && !visited[nodes[i][0]][nodes[i][1] + 1])
        widerNodes.push([nodes[i][0], nodes[i][1] + 1]);
      if (board[nodes[i][0] - 1] && board[nodes[i][0] - 1][nodes[i][1]] === 'O' && !visited[nodes[i][0] - 1][nodes[i][1]])
        widerNodes.push([nodes[i][0] - 1, nodes[i][1]]);
    }
    recursion(widerNodes);
  };

  var nodes = [];
  for (var i = 0; i < lenX; ++i) {
    if (board[0][i] === 'O') nodes.push([0, i]);
    if (board[lenY - 1][i] === 'O') nodes.push([lenY - 1, i]);
  }
  for (var i = 1; i < lenY - 1; ++i) {
    if (board[i][0] === 'O') nodes.push([i, 0]);
    if (board[i][lenX - 1] === 'O') nodes.push([i, lenX - 1]);
  }
  recursion(nodes);

  for (var i = 0; i < lenY; ++i) {
    for (var j = 0; j < lenX; ++j) {
      board[i][j] = visited[i][j] ? 'O' : 'X';
    }
  }
};

solve(null);
solve([
"X"
])