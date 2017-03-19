var nums = [2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6];

var canJump = function (nums) {
  var max = 0, flag = true, step = 1, l = nums.length;
  if (0 === l)
    flag = false;
  else {
    for (var i = 0; i < l; ++i) {
      --step;
      if (i + nums[i] > max) {
        max = i + nums[i];
        step = nums[i];
      }
      if (0 === step && i < l - 1) {
        flag = false;
        break;
      }
    }
  }
  return flag;
};

console.log(canJump(nums));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([2, 0, 0]));
