/**
 * Problem: https://leetcode.com/problems/2-keys-keyboard/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  const { floor, sqrt } = Math;
  let result = 0;
  while (true) {
    let i;
    for (i = floor(sqrt(n)); i >= 0; i--) {
      if (0 === n % i) break;
    }
    if (1 === i) {
      result += n / i;
      break;
    } else {
      result += i;
      n /= i;
    }
  }
  return result;
};

module.exports = minSteps;
