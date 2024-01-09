const { expect } = require('chai');

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
let longestSubsequence = function(arr, difference) {
  let result = 1;
  const dp = {};
  for (let num of arr) {
    if (dp[num - difference] !== undefined) {
      dp[num] = dp[num - difference] + 1;
      result = Math.max(result, dp[num]);
    } else {
      dp[num] = 1;
    }
  }
  return result;
};

it('longest-arithmetic-subsequence-of-given-difference', () => {
  expect(longestSubsequence([1, 2, 3, 4], 1)).to.eq(4);
  expect(longestSubsequence([1, 3, 5, 7], 1)).to.eq(1);
  expect(longestSubsequence([1,5,7,8,5,3,4,2,1], -2)).to.eq(4);
});