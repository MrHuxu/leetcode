var canPartition = function(nums) {
  var sum = 0, dp = [];
  nums.forEach(function (num) {
    sum += num;
  });

  if (sum % 2) return;
  sum /= 2;

  
};