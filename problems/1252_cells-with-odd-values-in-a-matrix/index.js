const { expect } = require('chai');

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
let oddCells = function(n, m, indices) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let tmp = 0;
      for (let index of indices) {
        if (i === index[0]) tmp++;
        if (j === index[1]) tmp++;
      }
      if (tmp % 2) result++;
    }
  }

  return result;
};

it('cells-with-odd-values-in-a-matrix', () => {
  expect(oddCells(2, 3, [[0, 1], [1, 1]])).to.eq(6);
  expect(oddCells(2, 2, [[1, 1], [0,0]])).to.eq(0);
});