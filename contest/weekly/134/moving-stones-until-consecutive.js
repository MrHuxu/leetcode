const { expect } = require('chai');

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
let numMovesStones = function(a, b, c) {
  const [min, mid, max] = [a,b,c].sort((i, j) => i > j ? 1 : -1);

  if (1 === max - mid && 1 === mid - min) {
    return [0, 0];
  }

  return [
    (max - mid > 2 && mid - min > 2) ? 2 : 1,
    max - min - 2
  ];
};

it ('moving-stones-until-consecutive', () => {
  expect(numMovesStones(1, 2, 5)).to.deep.eq([1, 2]);
  expect(numMovesStones(3, 5, 1)).to.deep.eq([1, 2]);
  expect(numMovesStones(4, 3, 2)).to.deep.eq([0, 0]);
  expect(numMovesStones(7, 4, 1)).to.deep.eq([2, 4]);
});