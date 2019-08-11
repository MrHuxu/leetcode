const { expect } = require('chai');

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
let numRollsToTarget = function(d, f, target) {
  if (target > d * f || target < d) return 0;
  if (target === d * f || target === d) return 1;
};

it('number-of-dice-rolls-with-target-sum', () => {
  expect(numRollsToTarget(2, 5, 10)).to.eq(1);
  expect(numRollsToTarget(2, 6, 7)).to.eq(6);
  expect(numRollsToTarget(30, 30, 500)).to.eq(222616187);
});