/**
 * Problem: https://leetcode.com/problems/arranging-coins/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  for (var i = 1; i < Number.MAX_VALUE; ++i) {
    if ((i + i * i) / 2 === n) {
      return i;
    } else if ((i + i * i) / 2 > n) {
      return i - 1;
    }
  }
};

module.exports = arrangeCoins;
