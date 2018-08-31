/**
 * Problem: https://leetcode.com/problems/surface-area-of-3d-shapes/description/
 */

const surfaceAreaOf3dShapes = grid => {
  const duplicates = (i, j, k) => {
    let res = 0;
    if (k > 1) res++;
    if (k < grid[i][j]) res++;
    if (grid[i - 1] && grid[i - 1][j] !== undefined && grid[i - 1][j] >= k) res++;
    if (grid[i + 1] && grid[i + 1][j] !== undefined && grid[i + 1][j] >= k) res++;
    if (grid[i][j - 1] !== undefined && grid[i][j - 1] >= k) res++;
    if (grid[i][j + 1] !== undefined && grid[i][j + 1] >= k) res++;

    return res;
  };

  let total = 0;
  let dups = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      for (let k = 1; k <= grid[i][j]; k++) {
        total += 6;
        dups += duplicates(i, j, k);
      }
    }
  }

  return total - dups;
};

module.exports = surfaceAreaOf3dShapes;
