const { expect } = require('chai');

/**
 * @param {string} text
 * @return {number}
 */
let maxNumberOfBalloons = function(text) {
  const m = {};
  for (let i = 0; i < text.length; i++) {
    m[text[i]] = m[text[i]] ? m[text[i]] + 1 : 1;
  }

  return Math.min(
    m['b'], m['a'], m['n'], Math.floor(m['l'] / 2), Math.floor(m['o'] / 2)
  ) || 0;
};

it('maximum-number-of-balloons', () => {
  expect(maxNumberOfBalloons('loonbalxballpoon')).to.eq(2);
  expect(maxNumberOfBalloons('leetcode')).to.eq(0);
});