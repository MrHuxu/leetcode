var pacificAtlantic = function (matrix) {
  if (!matrix.length) return [];

  var m = matrix.length, n = matrix[0].length;
  var visitPac = [], visitAtl = [];

  for (var i = 0; i < m; ++i) {
    visitPac.push([true]);
    visitAtl.push([]);
    visitAtl[i][n - 1] = true;
  }

  for (var i = 0; i < n; ++i) {
    visitPac[0][i] = true;
    visitAtl[m - 1][i] = true;
  }

  var visit = function (i, j, arr) {
    if (matrix[i - 1] && matrix[i - 1][j] !== undefined && matrix[i - 1][j] >= matrix[i][j]) {
      if (!arr[i - 1][j]) {
        arr[i - 1][j] = true;
        visit(i - 1, j, arr);
      }
    }
    if (matrix[i + 1] && matrix[i + 1][j] !== undefined && matrix[i + 1][j] >= matrix[i][j]) {
      if (!arr[i + 1][j]) {
        arr[i + 1][j] = true;
        visit(i + 1, j, arr);
      }
    }

    if (matrix[i][j - 1] !== undefined && matrix[i][j - 1] >= matrix[i][j]) {
      if (!arr[i][j - 1]) {
        arr[i][j - 1] = true;
        visit(i, j - 1, arr);
      }
    }

    if (matrix[i][j + 1] !== undefined && matrix[i][j + 1] >= matrix[i][j]) {
      if (!arr[i][j + 1]) {
        arr[i][j + 1] = true;
        visit(i, j + 1, arr);
      }
    }
  };

  for (var i = 0; i < m; ++i) {
    visit(i, 0, visitPac);
    visit(i, n - 1, visitAtl);
  }

  for (var i = 0; i < n; ++i) {
    visit(0, i, visitPac);
    visit(m - 1, i, visitAtl);
  }

  var result = [];
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (visitPac[i][j] && visitAtl[i][j]) result.push([i, j]);
    }
  }

  return result;
};

var board = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
];
console.log(pacificAtlantic(board));
var board2 = [[9, 10, 14, 9, 2, 6, 16], [0, 0, 4, 5, 16, 16, 15], [10, 8, 16, 10, 12, 8, 11], [3, 13, 15, 0, 19, 16, 5], [13, 17, 1, 12, 11, 8, 14], [14, 9, 11, 10, 5, 19, 11], [15, 3, 14, 3, 9, 11, 5], [9, 17, 5, 15, 5, 15, 7], [12, 11, 10, 0, 9, 14, 19], [9, 1, 4, 5, 8, 18, 18], [1, 4, 17, 16, 5, 12, 18], [18, 2, 0, 0, 2, 11, 5], [1, 15, 8, 18, 13, 15, 13], [11, 14, 4, 13, 3, 1, 1], [4, 2, 11, 19, 17, 8, 11], [4, 11, 10, 0, 1, 18, 11], [11, 7, 14, 4, 7, 8, 9], [12, 0, 0, 3, 6, 2, 12], [0, 16, 3, 3, 5, 6, 6], [6, 11, 17, 12, 18, 5, 15], [16, 14, 8, 4, 10, 16, 6], [9, 7, 2, 13, 5, 5, 5], [14, 17, 19, 4, 7, 2, 5], [11, 16, 18, 14, 8, 10, 12], [5, 11, 10, 17, 2, 2, 13], [7, 6, 12, 3, 5, 3, 12], [12, 10, 0, 19, 3, 15, 12], [13, 2, 12, 1, 1, 15, 19], [11, 15, 10, 8, 14, 19, 8], [16, 2, 2, 16, 5, 15, 16], [9, 8, 2, 17, 15, 14, 16], [17, 2, 17, 17, 0, 6, 3], [3, 4, 13, 9, 1, 4, 0], [1, 3, 13, 10, 14, 9, 4]];
console.log(pacificAtlantic(board2));