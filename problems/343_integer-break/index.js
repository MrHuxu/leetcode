/**
 * Problem: https://leetcode.com/problems/integer-break/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  var max = 0;
  for (var i = 2; i <= n; ++i) {
    var left = n % i, avg = parseInt(n / i);
    var pow = 1;
    for (var j = 0; j < i; ++j) {
      pow *= left > 0 ? (avg + 1) : avg;
      --left;
    }
    if (pow > max)
      max = pow;
    else
      break;
  }

  return max;
};
module.exports = integerBreak;
