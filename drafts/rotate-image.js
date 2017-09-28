var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
var matrix3 = [];

var rotate = function (matrix) {
  var n = matrix.length, tmp;
  var i, j, k;
  for (i = 0, j = n - 1; i <= j; ++i, --j) {
    k = i;
    for (k = i; k < j; ++k) {
      tmp = matrix[j - k + i][i]; 
      matrix[j - k + i][i] = matrix[j][j - k + i];
      matrix[j][j - k + i] = matrix[k][j];
      matrix[k][j] = matrix[i][k];
      matrix[i][k] = tmp;
    }
  }
};

rotate(matrix);
console.log(matrix);

rotate(matrix2);
console.log(matrix2);

rotate(matrix3);
console.log(matrix3);
