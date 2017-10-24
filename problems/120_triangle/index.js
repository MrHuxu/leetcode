/**
 * Problem: https://leetcode.com/problems/triangle/description/
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (var i = 1, l1 = triangle.length; i < l1; ++i) {
    var l2 = triangle[i].length;
    var tmp = triangle[i - 1].slice();
    triangle[i][0] = tmp[0] + triangle[i][0];
    triangle[i][l2 - 1] = tmp[l2 - 2] + triangle[i][l2 - 1];
    for (var j = 1; j < l2 - 1; ++j) {
      triangle[i][j] = Math.min(tmp[j - 1], tmp[j]) + triangle[i][j];
    }
  }

  return Math.min.apply(null, triangle[triangle.length - 1]);
};
module.exports = minimumTotal;
