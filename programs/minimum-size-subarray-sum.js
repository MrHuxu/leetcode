var minSubArrayLen = function(s, nums) {
  var head = 0, tail = 0, sum = 0;
  var miniLen = nums.length + 1, tmp;
  
  while (tail < nums.length) {
    sum += nums[tail];
    if (sum >= s) {
      for (;head <= tail; ++head) {
        if (sum - nums[head] < s)
          break;
        else
          sum -= nums[head];
      }
      miniLen = miniLen ? Math.min(tail - head + 1, miniLen) : tail - head + 1;
    }
    ++tail;
  }
  
  return miniLen === nums.length + 1 ? 0 : miniLen;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(100, []));