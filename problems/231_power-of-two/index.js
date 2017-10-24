/**
 * Problem: https://leetcode.com/problems/power-of-two/description/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && !(n & (n - 1));
};
module.exports = isPowerOfTwo;
