/**
 * Problem: https://leetcode.com/problems/ugly-number/description/
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (!num) return false;
  while (true) {
    if (0 === num % 2) {
      num /= 2;
    } else if (0 === num % 3) {
      num /= 3;
    } else if (0 === num % 5) {
      num /= 5;
    } else {
      break;
    }
  }
  
  return 1 === num;
};
module.exports = isUgly;
