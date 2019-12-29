const { expect } = require('chai');

/**
 * @param {number[][]} grid
 * @return {number}
 */
let countServers = function(grid) {
  const rows = grid.map((r) => 0);
  const cols = grid[0].map((c) => 0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (1 === grid[i][j]) {
        rows[i]++;
        cols[j]++;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (1 === grid[i][j]) {
        if (rows[i] >= 2 || cols[j] >= 2) result++;
      }
    }
  }

  return result;
};

it('count-servers-that-communicate', () => {
  // expect(countServers([[1,0],[0,1]])).to.eq(0);
  expect(countServers([[1,0],[1,1]])).to.eq(3);
  // expect(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]])).to.eq(4);
});