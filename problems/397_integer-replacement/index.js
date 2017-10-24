/**
 * Problem: https://leetcode.com/problems/integer-replacement/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  if (n <= 3) {
    return n - 1;
  } else {
    if (0 === n % 2) {
      return integerReplacement(n / 2) + 1;
    } else {
      return Math.min(integerReplacement(n - 1) + 1, integerReplacement(n + 1) + 1);
    }
  }
};
module.exports = integerReplacement;
