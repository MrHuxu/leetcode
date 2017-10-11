/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let prev = n & 1;
  while (n > 1) {
    n = n >> 1;
    if ((n & 1) === prev) return false;
    prev = n & 1;
  }
  return true;
};

module.exports = hasAlternatingBits;
