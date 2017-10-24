/**
 * Problem: https://leetcode.com/problems/longest-harmonious-subsequence/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let times = nums.reduce((pre, curr) => {
    pre[curr] = pre[curr] === undefined ? 1 : ++pre[curr];
    return pre;
  }, {});

  let result = 0;
  let keys = Object.keys(times).map(key => parseInt(key)).sort((a, b) => a > b ? 1 : -1);
  for (let i = 0; i < keys.length - 1; ++i) {
    if (times[keys[i] + 1]) {
      result = Math.max(result, times[keys[i]] + times[keys[i] + 1]);
    }
  }
  return result;
};
module.exports = findLHS;
