const { expect } = require('chai');

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
let reconstructMatrix = function(upper, lower, colsum) {
  const result = [[], []];

  if (colsum.reduce((pre, curr) => {
    result[0].push(0);
    result[1].push(0);
    return pre + curr;
  }, 0) !== upper + lower) {
    return [];
  }

  for (let i = 0; i < colsum.length; i++) {
    if (2 === colsum[i]) {
      upper--;
      lower--;
      result[0][i] = 1;
      result[1][i] = 1;
    }
  }

  for (let i = 0; i < colsum.length; i++) {
    if (1 === colsum[i]) {
      if (upper > 0) {
        upper--;
        result[0][i] = 1;
      } else {
        lower--;
        result[1][i] = 1;
      }
    }
  }

  return (0 === upper && 0 === lower) ? result: [];
};

it('reconstruct-a-2-row-binary-matrix', () => {
  expect(reconstructMatrix(2, 1, [1, 1, 1])).to.deep.eq([[1,1,0],[0,0,1]]);
  expect(reconstructMatrix(2, 3, [2, 2, 1, 1])).to.deep.eq([]);
  expect(reconstructMatrix(5, 5, [2,1,2,0,1,0,1,2,0,1])).to.deep.eq([
    [1,1,1,0,1,0,0,1,0,0],
    [1,0,1,0,0,0,1,1,0,1]
  ]);
});