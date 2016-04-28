var numSquares = function (num) {
  var dp = [], min, i, j;

  for (i = 1; i <= num; ++i) {
    if (Math.sqrt(i) % 1 === 0)
      dp[i] = 1;
    else {
      min = i;
      for (j = 1; j * j < i; ++j) {
        min = Math.min(min, dp[i - j * j] + 1);
      }
      dp[i] = min;
    }
  }

  return dp[num];
};

console.log(numSquares(6));
console.log(numSquares(12));
console.log(numSquares(3102));
console.log(numSquares(8829));
console.log(numSquares(9732));
console.log(numSquares(10000));
