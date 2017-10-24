/**
 * Problem: https://leetcode.com/problems/nim-game/description/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 !== 0;
};
module.exports = canWinNim;
