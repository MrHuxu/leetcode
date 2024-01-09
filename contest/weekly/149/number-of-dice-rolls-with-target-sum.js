const { expect } = require('chai');

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
let numRollsToTarget = function(d, f, target) {
  let dp = {}, nextDp;
  for (let i = 1; i <= f; i++) dp[i] = 1;

  for (let i = 2; i <= d; i++) {
    nextDp = {};
    const range = Math.min(target, i * f);

    for (let j = i; j <= range; j++) {
      for (let k = 1; k <= f; k++) {
        if (dp[j - k]) {
          if (!nextDp[j]) nextDp[j] = 0;

          nextDp[j] += dp[j - k] % 1000000007;
        }
      }
    }
    dp = nextDp;
  }

  return dp[target] ? dp[target] % 1000000007 : 0;
};


it('number-of-dice-rolls-with-target-sum', () => {
  expect(numRollsToTarget(1, 6, 3)).to.eq(1);
  expect(numRollsToTarget(2, 6, 7)).to.eq(6);
  expect(numRollsToTarget(2, 5, 10)).to.eq(1);
  expect(numRollsToTarget(1, 2, 3)).to.eq(0);
  expect(numRollsToTarget(30, 30, 500)).to.eq(222616187);
});