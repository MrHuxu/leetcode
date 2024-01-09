const { expect } = require('chai');

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
let numEquivDominoPairs = function(dominoes) {
  let result = 0;
  const m = {};
  for (let domino of dominoes) {
    const min = Math.min(...domino);
    const max = Math.max(...domino);

    if (!m[min]) {
      m[min] = { [max]: 1 };
      continue;
    }

    if (!m[min][max]) {
      m[min][max] = 1;
      continue;
    }

    result += m[min][max];
    m[min][max]++;
  }
  return result;
};

it('number-of-equivalent-domino-pairs', () => {
  expect(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])).to.eq(1);
  expect(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6], [4, 3]])).to.eq(2);
});