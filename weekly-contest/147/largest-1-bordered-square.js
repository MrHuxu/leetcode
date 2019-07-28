const { expect } = require('chai');

/**
 * @param {number[][]} grid
 * @return {number}
 */
let largest1BorderedSquare = function(grid) {
  const possibleLargest = Math.min(grid.length, grid[0].length);

  const check = (i, j, width) => {
    for (let k = i; k <= i + width - 1; k++) {
      if (!grid[k][j]) return false;
    }
    for (let k = j; k <= j + width - 1; k++) {
      if (!grid[i][k]) return false;
    }
    for (let k = i; k <= i + width - 1; k++) {
      if (!grid[k][j + width - 1]) return false;
    }
    for (let k = j; k <= j + width - 1; k++) {
      if (!grid[i + width - 1][k]) return false;
    }

    return true;
  };

  for (let k = possibleLargest; k >= 1; k--) {
    for (let i = 0; i <= grid.length - k; i++) {
      for (let j = 0; j <= grid[0].length - k; j++) {
        if (check(i, j, k)) return k * k;
      }
    }
  }

  return 0;
};

it('largest-1-bordered-square', () => {
  expect(largest1BorderedSquare([[1,1,1],[1,0,1],[1,1,1]])).to.eq(9);
  expect(largest1BorderedSquare([[1, 1, 0, 0]])).to.eq(1);
  expect(largest1BorderedSquare([[0, 0], [0, 1]])).to.eq(1);
});