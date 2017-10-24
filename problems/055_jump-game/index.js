/**
 * Problem: https://leetcode.com/problems/jump-game/description/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
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

module.exports = canJump;
