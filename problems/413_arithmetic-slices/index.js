/**
 * Problem: https://leetcode.com/problems/arithmetic-slices/description/
 */
/**
 * @param {number[]} A
 * @return {number}
 */
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
module.exports = numberOfArithmeticSlices;
