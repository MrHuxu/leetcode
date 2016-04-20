var productExceptSelf = function(nums) {
  var result = [1];
  var tmp =1, len = nums.length;
  for (var i = 1; i < len; ++i) {
    result[i] = nums[i - 1] * result[i - 1];
  }
  for (i = len - 1; i >= 0; --i) {
    result[i] = result[i] * tmp;
    tmp *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));