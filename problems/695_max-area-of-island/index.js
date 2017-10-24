/**
 * Problem: https://leetcode.com/problems/max-area-of-island/description/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const visited = {};
  let max = 0;

  const count = (x, y) => {
    if (!visited[x]) visited[x] = {};
    visited[x][y] = true;

    return 1 +
      (grid[x - 1] && grid[x - 1][y] && !(visited[x - 1] && visited[x - 1][y]) ? count(x - 1, y, 1) : 0) +
      (grid[x + 1] && grid[x + 1][y] && !(visited[x + 1] && visited[x + 1][y]) ? count(x + 1, y, 2) : 0) +
      (grid[x][y - 1] && !(visited[x] && visited[x][y - 1]) ? count(x, y - 1, 3) : 0) +
      (grid[x][y + 1] && !(visited[x] && visited[x][y + 1]) ? count(x, y + 1, 4) : 0);
  };
  
  for (let x = 0; x < grid.length; ++x) {
    for (let y = 0; y < grid[x].length; ++y) {
      if (grid[x][y] && !(visited[x] && visited[x][y])) {
        max = Math.max(max, count(x, y, 0));
      }
    }
  }

  return max;
};

module.exports = maxAreaOfIsland;
