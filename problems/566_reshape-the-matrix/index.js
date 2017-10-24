/**
 * Problem: https://leetcode.com/problems/reshape-the-matrix/description/
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (!nums.length) return nums;
  var originalR = nums.length, originalC = nums[0].length;
  if (originalR * originalC < r * c) return nums;

  var result = [];
  for (var i = 0; i < r * c; i++) {
    var elem = nums[parseInt(i / originalC)][i % originalC];
    if (!result[parseInt(i / c)]) result[parseInt(i / c)] = [];
    result[parseInt(i / c)][i % c] = elem;
  }
  return result;
};
module.exports = matrixReshape;
