/**
 * Problem: https://leetcode.com/problems/reach-a-number/description/
 */

const reachANumber = target => {
  target = Math.abs(target);
  for (let n = 1; true; n++) {
    const sum = (n + n * n) / 2;
    if (sum === target || (sum > target && 0 === (sum - target) % 2))
      return n;
  }
};

module.exports = reachANumber;
