const { expect } = require('chai');

/**
 * @param {number[]} arr
 * @return {number}
 */
let maximumSum = function(arr) {
  const dp = [[arr[0], false, 0]];

  for (let i = 1; i < arr.length; i++) {
    if (dp[i - 1][1]) {
      if (arr[i] > dp[i - 1][0] + arr[i]) {
        dp[i] = [arr[i], false];
      } else {
        dp[i] = [dp[i - 1][0] + arr[i], true, arr[i]];
      }
    } else {
      if (arr[i] > dp[i - 1][0] + arr[i] && arr[i] > dp[i - 1][0]) {
        dp[i] = [arr[i], false];
      } else if (dp[i - 1][0] + arr[i] > arr[i] && dp[i - 1][0] + arr[i] >= dp[i - 1][0]) {
        dp[i] = [dp[i - 1][0] + arr[i], false];
      } else if (dp[i - 1][0] > arr[i] && dp[i - 1][0] >= dp[i - 1][0] + arr[i]) {
        dp[i] = [dp[i - 1][0], true, arr[i]];
      } else {
        dp[i] = [arr[i], false];
      }
    }
  }

  console.log({ dp });
  return Math.max(...dp.map(i => i[0]));
};

it('maximum-subarray-sum-with-one-deletion', () => {
  // expect(maximumSum([1, -2, 0, 3])).to.eq(4);
  // expect(maximumSum([1, -2, -2, 3])).to.eq(3);
  // expect(maximumSum([-1, -1, -1, -1])).to.eq(-1);
  // expect(maximumSum([2,1,-2,-5,-2])).to.eq(3);
  // expect(maximumSum([1,-4,-5,-2,5,0,-1,2])).to.eq(7);
  expect(maximumSum([8,-1,6,-7,-4,5,-4,7,-6])).to.eq(17);
});