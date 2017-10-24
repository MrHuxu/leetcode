/**
 * Problem: https://leetcode.com/problems/pascals-triangle/description/
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  var result = [], tmp;

  for (var i = 0; i < numRows; ++i) {
    if (!result[i - 1]) {
      tmp = [];
    } else {
      tmp = [1];
      for (var j = 1, l = result[i - 1].length; j < l; ++j) {
        tmp.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    tmp.push(1);
    result.push(tmp);
  }

  return result;
};
module.exports = generate;
