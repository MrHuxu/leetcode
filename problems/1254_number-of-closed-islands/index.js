const { expect } = require('chai');

/**
 * @param {number[][]} grid
 * @return {number}
 */
let closedIsland = function(grid) {
  const visited = [];
  for (let i = 0; i < grid.length; i++) {
    const tmp = [];
    for (let j = 0; j < grid[i].length; j++) tmp[j] = false;
    visited[i] = tmp;
  }

  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return true;
    }

    if (1 === grid[i][j]) {
      return false;
    }

    if (visited[i][j]) {
      return false;
    }

    visited[i][j] = true;

    const up = dfs(i - 1, j);
    const left = dfs(i, j - 1);
    const right = dfs(i, j + 1);
    const bottom = dfs(i + 1, j);

    return up || left || right || bottom;
  };

  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (0 === grid[i][j] && !visited[i][j] && !dfs(i, j)) result++;
    }
  }

  return result;
};

it('number-of-closed-islands', () => {
  expect(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]])).to.eq(2);
  expect(closedIsland([[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]])).to.eq(1);
  expect(closedIsland([[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1]
  ])).to.eq(2);
  expect(closedIsland([
    [0,0,1,1,0,1,0,0,1,0],
    [1,1,0,1,1,0,1,1,1,0],
    [1,0,1,1,1,0,0,1,1,0],
    [0,1,1,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,1,1,1,0],
    [0,1,0,1,0,1,0,1,1,1],
    [1,0,1,0,1,1,0,0,0,1],
    [1,1,1,1,1,1,0,0,0,0],
    [1,1,1,0,0,1,0,1,0,1],
    [1,1,1,0,1,1,0,1,1,0]
  ])).to.eq(5);
});