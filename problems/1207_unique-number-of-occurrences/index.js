const { expect } = require('chai');

/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = function(arr) {
  const m1 = {};
  for (let i of arr) {
    m1[i] = m1[i] ? m1[i] + 1 : 1;
  }
  const m2 = {};
  for (let k in m1) {
    if (m2[m1[k]]) return false;
    else m2[m1[k]] = true;
  }
  return true;
};

it('unique-number-of-occurrences', () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).to.eq(true);
  expect(uniqueOccurrences([1, 2])).to.eq(false);
  expect(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])).to.eq(true);
});