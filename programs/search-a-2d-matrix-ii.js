var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  var m = matrix.length, n = matrix[0].length;
  var i, j, flag = false;
  
  for (i = 0, j = n - 1; i < m && j >= 0;) {
    if (matrix[i][j] === target) {
      flag = true;
      break;
    } else if (matrix[i][j] < target) {
      ++i;
    } else {
      --j;
    }
  }
  
  return flag;
};

console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5));
console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20));