/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp = [], result = [0, 0];
  for (let i = 0; i < nums.length; ++i) {
    let max = 1, tmp = { 1: 1 };
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j][0] + 1);
        if (max === dp[j][0] + 1) {
          tmp[max] = tmp[max] ? tmp[max] + dp[j][1] : dp[j][1];
        }
      }
    }
    dp[i] = [max, tmp[max]];
    result[max] = result[max] ? result[max] + tmp[max] : tmp[max];
  }
  console.log(dp, result);

  return result.pop();
};

console.log(findNumberOfLIS([]));
console.log(findNumberOfLIS([1]));
console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([1,2,4,3,5]));
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
console.log(findNumberOfLIS([100,90,80,70,60,50,60,70,80,90,100]));