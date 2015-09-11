/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var max = 0, flag = true, step = 1, l = nums.length;
  if (l === 0)
    flag = false;
  else {
    for (var i = 0; i < l; ++i) {
      --step;
      if (i + nums[i] > max) {
        max = i + nums[i];
        step = nums[i];
      }
      if (step === 0 && i < l - 1) {
        flag = false;
        break;
      }
    }
  }
  return flag;
};
