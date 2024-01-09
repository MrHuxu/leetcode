const { expect } = require('chai');

/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
let colorBorder = function(grid, r0, c0, color) {
  const visited = {};
  const initColor = grid[r0][c0];
  const changes = [];

  const nodes = [[r0, c0]];
  while (nodes.length) {
    node = nodes.shift();

    const [r, c] = node;
    if (visited[r]) {
      visited[r][c] = true;
    } else visited[r] = { [c]: true };

    let isBorder = false;

    if (grid[r - 1] && grid[r - 1][c] === initColor) {
      if (visited[r - 1]) {
        if (!visited[r - 1][c]) {
          visited[r - 1][c] = true;
          nodes.push([r - 1, c]);
        }
      } else {
        visited[r - 1] = { [c]: true };
        nodes.push([r - 1, c]);
      }
    } else {
      isBorder = true;
    };

    if (grid[r + 1] && grid[r + 1][c] === initColor) {
      if (visited[r + 1]) {
        if (!visited[r + 1][c]) {
          visited[r + 1][c] = true;
          nodes.push([r + 1, c]);
        }
      } else {
        visited[r + 1] = { [c]: true };
        nodes.push([r + 1, c]);
      }
    } else {
      isBorder = true;
    };

    if (grid[r][c - 1] === initColor) {
      if (visited[r]) {
        if (!visited[r][c - 1]) {
          visited[r][c - 1] = true;
          nodes.push([r, c - 1]);
        }
      } else {
        visited[r] = { [c - 1]: true };
        nodes.push([r, c - 1]);
      }
    } else {
      isBorder = true;
    };

    if (grid[r][c + 1] === initColor) {
      if (visited[r]) {
        if (!visited[r][c + 1]) {
          visited[r][c + 1] = true;
          nodes.push([r, c + 1]);
        }
      } else {
        visited[r] = { [c + 1]: true };
        nodes.push([r, c + 1]);
      }
    } else {
      isBorder = true;
    };
    
    if (isBorder) changes.push([r, c]);
  }

  for (let c of changes) grid[c[0]][c[1]] = color;
  return grid;
};

console.log(colorBorder([[2,1,3,2,1,1,2],[1,2,3,1,2,1,2],[1,2,1,2,2,2,2],[2,1,2,2,2,2,2],[2,3,3,3,2,1,2]], 4, 4, 3));

it('coloring-a-border', () => {
  expect(colorBorder([[1,1],[1,2]], 0, 0, 3)).to.deep.eq([[3, 3], [3, 2]]);
  expect(colorBorder([[1,2,2],[2,3,2]], 0, 1, 3)).to.deep.eq([[1, 3, 3], [2, 3, 3]]);
  expect(colorBorder([[1,1,1],[1,1,1],[1,1,1]], 1, 1, 2)).to.deep.eq([[2, 2, 2], [2, 1, 2], [2, 2, 2]]);
  expect(colorBorder([[1,2,1,2,1,2],[2,2,2,2,1,2],[1,2,2,2,1,2]], 1, 3, 1)).to.deep.eq([[1,1,1,1,1,2],[1,2,1,1,1,2],[1,1,1,1,1,2]]);
  expect(colorBorder([[2,1,3,2,1,1,2],[1,2,3,1,2,1,2],[1,2,1,2,2,2,2],[2,1,2,2,2,2,2],[2,3,3,3,2,1,2]], 4, 4, 3)).to.deep.eq([ [ 2, 1, 3, 2, 1, 1, 3 ],
    [ 1, 2, 3, 1, 3, 1, 3 ],
    [ 1, 2, 1, 3, 2, 3, 3 ],
    [ 2, 1, 3, 3, 2, 3, 3 ],
    [ 2, 3, 3, 3, 3, 1, 3 ] ]);
});
