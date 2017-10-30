/**
 * Problem: https://leetcode.com/problems/1-bit-and-2-bit-characters/description/
 */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let pre = null;
  for (let i = 0; i < bits.length - 1; i++) {
    if (bits[i]) {
      pre = pre ? null : bits[i];
    } else {
      pre = null;
    }
  }

  return pre !== 1;
};

module.exports = isOneBitCharacter;
