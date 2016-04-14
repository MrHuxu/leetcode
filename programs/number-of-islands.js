// just can be solved by recursion, but need to optimize

var numIslands = function(board) {
  if (!board || !board.length) return 0;
  var lenX = board[0].length, lenY = board.length;
  var visited = [], result = 0;
  for (var i = 0; i < lenY; ++i) visited[i] = [];

  var recursion = function (nodes) {
    if (!nodes.length) return;
    var widerNodes = [];
    for (var i = 0, len = nodes.length; i < len; ++i) {
      if (!visited[nodes[i][0]][nodes[i][1]]) {
        visited[nodes[i][0]][nodes[i][1]] = true;
        if (board[nodes[i][0]] && board[nodes[i][0]][nodes[i][1] - 1] === '1' && !visited[nodes[i][0]][nodes[i][1] - 1])
          widerNodes.push([nodes[i][0], nodes[i][1] - 1]);
        if (board[nodes[i][0] + 1] && board[nodes[i][0] + 1][nodes[i][1]] === '1' && !visited[nodes[i][0] + 1][nodes[i][1]])
          widerNodes.push([nodes[i][0] + 1, nodes[i][1]]);
        if (board[nodes[i][0]] && board[nodes[i][0]][nodes[i][1] + 1] === '1' && !visited[nodes[i][0]][nodes[i][1] + 1])
          widerNodes.push([nodes[i][0], nodes[i][1] + 1]);
        if (board[nodes[i][0] - 1] && board[nodes[i][0] - 1][nodes[i][1]] === '1' && !visited[nodes[i][0] - 1][nodes[i][1]])
          widerNodes.push([nodes[i][0] - 1, nodes[i][1]]);
      }
    }
    recursion(widerNodes);
  };

  for (var i = 0; i < lenY; ++i) {
    for (var j = 0; j < lenX; ++j) {
      if (board[i][j] === '1' && !visited[i][j]) {
        ++result;
        recursion([[i, j]]);
      }
    }
  }

  return result;
};

console.log(numIslands(null));
console.log(numIslands([]));
console.log(numIslands([
'11110',
'11010',
'11000',
'00000'
]));
console.log(numIslands([
"11111011111111101011",
"01111111111110111110",
"10111001101111111111",
"11110111111111111111",
"10011111111111111111",
"10111111011101110111",
"01111111111101101111",
"11111111111101111011",
"11111111110111111111",
"11111111111111111111",
"01111111011111111111",
"11111111111111111111",
"11111111111111111111",
"11111011111110111111",
"10111110111011110111",
"11111111111101111110",
"11111111111110111100",
"11111111111111111111",
"11111111111111111111",
"11111111111111111111"]));