/**
 * Problem: https://leetcode.com/problems/array-partition-i/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a > b ? 1 : -1);
  return nums.reduce((pre, curr, index) => {
    if (!(index % 2)) pre += curr;
    return pre;
  }, 0);
};
module.exports = arrayPairSum;
