/**
 * Problem: https://leetcode.com/problems/reach-a-number/description/
 */

const reachANumber = target => {
  target = Math.abs(target);
  for (let step = 1; true; step++) {
    const sum = (step + step * step) / 2;
    if (sum === target || (sum > target && 0 === (sum - target) % 2))
      return step;
  }
};

module.exports = reachANumber;
