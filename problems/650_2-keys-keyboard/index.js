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
  while (n !== 1) {
    let found = false, i;
    for (i = 2; i <= floor(sqrt(n)); i++) {
      if (0 === n % i) {
        found = true;
        break;
      }
    }

    if (found) {
      result += i;
      n /= i;
    } else {
      result += n;
      break;
    }
  }
  return result;
};

module.exports = minSteps;
