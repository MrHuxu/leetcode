var matrix = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]];
console.log(matrix);

var setZeroes = function (matrix) {
  var m = matrix.length, n = matrix[0].length;
  var zeroRow = false, zeroCol = false;
  for (var i = 0; i < n; ++i)
    if (!matrix[0][i]) zeroRow = true;
  for (var i = 0; i < m; ++i)
    if (!matrix[i][0]) zeroCol = true;
  for (var i = 1; i < m; ++i) {
    for (var j = 1; j < n; ++j) {
      if (!matrix[i][j]) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  console.log(matrix);
  for (i = 1; i < m; ++i) {
    for (j = 1; j < n; ++j) {
      if (!matrix[0][j] || !matrix[i][0])
        matrix[i][j] = 0;
    }
  }
  if (zeroRow)
    for (var i = 0; i < n; ++i)
      matrix[0][i] = 0;
  if (zeroCol)
    for (var i = 0; i < m; ++i)
      matrix[i][0] = 0;
};

setZeroes(matrix);
console.log(matrix);
