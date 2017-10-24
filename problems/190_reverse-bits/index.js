/**
 * Problem: https://leetcode.com/problems/reverse-bits/description/
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var tmp = '';
  for (var i = 0; i < 32; ++i) {
    if (n & 1)
      tmp += '1';
    else
      tmp += '0';
    n = n >> 1;
  }
  return parseInt(tmp, 2);
};
module.exports = reverseBits;
