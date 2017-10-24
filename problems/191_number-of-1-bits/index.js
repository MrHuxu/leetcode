/**
 * Problem: https://leetcode.com/problems/number-of-1-bits/description/
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var result = 0;
  while (n) {
    if (n > 2147483647) {
      if (n % 2) ++result;
      n /= 2;
    } else {
      if (n & 1) ++result;
      n = n >> 1;
    }
  }
  return result;
};
module.exports = hammingWeight;
