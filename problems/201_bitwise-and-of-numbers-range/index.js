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