var numberOfArithmeticSlices = function(A) {
  var dp = [0, 0], result = 0;
  if (A[2] - A[1] === A[1] - A[0]) {
    dp.push(1);
    ++result;
  }

  for (var i = 3, l = A.length; i < l; ++i) {
    dp[i] = A[i] - A[i - 1] === A[i - 1] - A[i - 2] ? dp[i - 1] + 1 : 0;
    result += dp[i];
  }
  return result;
};

// console.log(numberOfArithmeticSlices([1, 2]));
// console.log(numberOfArithmeticSlices([-1, 0, 1]));
console.log(numberOfArithmeticSlices([1,2,3,4,5,6]));
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

// console.log(numberOfArithmeticSlices([1, 3, 5, 7, 9]));
// console.log(numberOfArithmeticSlices([7, 7, 7, 7]));
// console.log(numberOfArithmeticSlices([3, -1, -5, -9]));
// console.log(numberOfArithmeticSlices([1, 2, 5, 7]));
