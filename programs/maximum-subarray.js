var maxSubArray = function(nums) {
  var dp = [0], max;
  for (var i = 1, l = nums.length; i <= l; ++i) {
    if (i === 1)
      dp[i] = nums[i - 1];
    else {
      dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1]);
    }
    if (max === undefined || dp[i] > max) max = dp[i];
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 0, -2]));