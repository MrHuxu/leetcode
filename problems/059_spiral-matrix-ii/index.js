/**
 * Problem: https://leetcode.com/problems/spiral-matrix-ii/description/
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  var result = [];
  for (var i = 0; i < n; ++i) result.push([]);
  var j = 0, k = n - 1, l = 0;
  var current = 1;
  while (j <= k) {
    for (i = j; i <= k; ++i)
      if (!result[j][i]) result[j][i] = current++;
    for (i = j; i <= k; ++i)
      if (!result[i][k]) result[i][k] = current++;
    for (i = k; i >= j; --i)
      if (!result[k][i]) result[k][i] = current++;
    for (i = k; i >= j; --i)
      if (!result[i][j]) result[i][j] = current++;
    ++j;
    --k;
  }
  return result;
};

module.exports = generateMatrix;
