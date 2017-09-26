/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp = [], result = [0];
  for (let i = 0; i < nums.length; ++i) {
    dp[i] = 1;
    result[dp[i]] = result[dp[i]] ? result[dp[i]] + 1 : 1;

    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        result[dp[i]] = result[dp[i]] ? result[dp[i]] + 1 : 1;
      }
    }
  }
  console.log(dp, result);

  return result.pop();
};

// console.log(findNumberOfLIS([]));
// console.log(findNumberOfLIS([1]));
// console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]));
// console.log(findNumberOfLIS([2, 2, 2, 2, 2]));