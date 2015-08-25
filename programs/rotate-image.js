var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var rotate = function (matrix) {
  var n = matrix.length, tmp;
  for (var i = 0; i < n; ++i) {
    for (var j = 0; j < n; ++j) {
      console.log('i: ' + i + ' j: ' + j);
        debugger;
      tmp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[i][j];
      matrix[i][j] = tmp;
      console.log(matrix);
    }
  }
}

rotate(matrix);
console.log(matrix);
