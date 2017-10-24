/**
 * Problem: https://leetcode.com/problems/power-of-three/description/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (n > 1) {
    if (n % 3)
      break;
    else
      n /= 3;
  }
  
  return 1 === n;
};
module.exports = isPowerOfThree;
