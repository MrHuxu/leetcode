/**
 * Problem: https://leetcode.com/problems/bitwise-and-of-numbers-range/description/
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  var result = 0;

  while (m != n) {
    m >>= 1;
    n >>= 1;
    ++result;
  }

  return m << result;
};

module.exports = rangeBitwiseAnd;