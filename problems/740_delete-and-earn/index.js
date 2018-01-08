/**
 * Problem: https://leetcode.com/problems/delete-and-earn/description/
 */

const deleteAndEarn = nums => {
  const numsObj = nums.reduce((pre, num) => {
    pre[num] = pre[num] ? (pre[num] + num) : num;
    return pre;
  }, {});
  const uniqNums = Object.keys(numsObj).map(key => parseInt(key)).sort((a, b) => a > b ? 1 : -1);

  const dp = [0, numsObj[uniqNums[0]]];
  for (let i = 2; i <= uniqNums.length; i++) {
    if (uniqNums[i - 1] === uniqNums[i - 2] + 1) {
      if (uniqNums[i - 3] && uniqNums[i - 2] === uniqNums[i - 3] + 1) {
        dp[i] = Math.max(dp[i - 2] + numsObj[uniqNums[i - 1]], dp[i - 1]);
      } else {
        dp[i] = Math.max(numsObj[uniqNums[i - 1]], numsObj[uniqNums[i - 2]]) + dp[i - 1] - numsObj[uniqNums[i - 2]];
      }
    } else {
      dp[i] = dp[i - 1] + numsObj[uniqNums[i - 1]];
    }
  }

  return dp[uniqNums.length];
};

module.exports = deleteAndEarn;
