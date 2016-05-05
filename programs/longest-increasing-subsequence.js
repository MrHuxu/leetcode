var lengthOfLIS = function(nums) {
  var dp = [], max = 0, tmp;
  
  for (var i = 0, len = nums.length; i < len; ++i) {
    tmp = 1;
    for (var j = i - 1; j >= 0; --j) {
      if (nums[i] > nums[j]) tmp = Math.max(tmp, dp[j] + 1);
    }
    dp[i] = tmp;
    max = Math.max(tmp, max);
  }
  
  return max;
};

console.log(lengthOfLIS([]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));