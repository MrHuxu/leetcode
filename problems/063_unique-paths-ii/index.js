/**
 * Problem: https://leetcode.com/problems/unique-paths-ii/description/
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var result = [], flag = true;
  var m = obstacleGrid.length, n = obstacleGrid[0].length;
  for (var i = 0; i < m; ++i) result.push([]);
  for (var i = 0; i < m; ++i) {
    if (obstacleGrid[i][0]) flag = false;
    result[i][0] = flag ? 1 : 0;
  }
  flag = true;
  for (var i = 0; i < n; ++i) {
    if (obstacleGrid[0][i]) flag = false;
    result[0][i] = flag ? 1 : 0;
  }
  for (var i = 1; i < m; ++i) {
    for (var j = 1; j < n; ++j) {
      result[i][j] = result[i - 1][j] * (Math.abs(obstacleGrid[i - 1][j] - 1)) +
                     result[i][j - 1] * (Math.abs(obstacleGrid[i][j - 1] - 1));
    }
  }
  return result[m - 1][n - 1] * Math.abs(obstacleGrid[m - 1][n - 1] - 1);
};

module.exports = uniquePathsWithObstacles;
