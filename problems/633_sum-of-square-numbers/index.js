/**
 * Problem: https://leetcode.com/problems/sum-of-square-numbers/description/
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  const { ceil, sqrt } = Math;
  const { isInteger } = Number;
  const traverseEnd = ceil(sqrt(c));

  for (let i = 0; i <= traverseEnd; i++) {
    if (isInteger(sqrt(c - i * i))) return true;
  }
  return false;
};

module.exports = judgeSquareSum;
