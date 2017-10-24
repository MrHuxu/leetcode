/**
 * Problem: https://leetcode.com/problems/subarray-sum-equals-k/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var result = 0;
  nums.reduce((pre, num) => {
    for (var i = 0; i < pre.length; ++i) {
      pre[i] += num;
      if (pre[i] === k) ++result;
    }
    pre.push(num);
    if (num === k) ++result;

    return pre;
  }, []);
  return result;
};
module.exports = subarraySum;
