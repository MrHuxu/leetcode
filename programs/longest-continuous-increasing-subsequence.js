/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) return 0;

  let result = 1;
  let dp = [1];

  for (let i = 1; i < nums.length; ++i) {
    dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1;
    result = Math.max(result, dp[i]);
  }

  return result;
};

console.log(findLengthOfLCIS([]));
console.log(findLengthOfLCIS([1,3,5,4,7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));