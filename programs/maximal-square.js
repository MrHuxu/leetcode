var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  var maxWidth = 0;
  var len1 = matrix.length, len2 = matrix[0].length;
  var dp = [], i, j;
  for (i = 0; i < len1; ++i) dp.push([]);
  
  for (i = 0; i < len1; ++i) {
    for (j = 0; j < len2; ++j) {
      if ('1' === matrix[i][j]) {
        if ((matrix[i - 1] && '1' === matrix[i - 1][j]) && '1' === matrix[i][j - 1]) {
          if (dp[i - 1][j] === dp[i][j - 1] && dp[i][j - 1] === dp[i - 1][j - 1])
            dp[i][j] = dp[i - 1][j - 1] + 1;
          else
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        } else {
          dp[i][j] = 1;
        }
      } else {
        dp[i][j] = 0;
      }
      maxWidth = Math.max(dp[i][j], maxWidth);
    }
  }
  
  console.log(dp);
  
  return maxWidth * maxWidth;
};

console.log(maximalSquare([['0']]));
console.log(maximalSquare([['0', '1']]));
console.log(maximalSquare([['1']]));
console.log(maximalSquare([
  "1010",
  "1011",
  "1011",
  "1111"
]));
console.log(maximalSquare([
  "0001",
  "1101",
  "1111",
  "0111",
  "0111"
]));