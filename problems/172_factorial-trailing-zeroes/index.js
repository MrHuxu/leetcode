/**
 * Problem: https://leetcode.com/problems/factorial-trailing-zeroes/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var result = 0;

  while (n > 0) {
    n = parseInt(n / 5);
    result += n;
  }

  return result;
};
module.exports = trailingZeroes;
