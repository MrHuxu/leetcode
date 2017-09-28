/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var result, diff, tmp, left, right;
  nums.sort(function (a, b) {
    return parseInt(a) < parseInt(b) ? -1 : 1;
  });
  for (var i = 0, l = nums.length; (i < l - 2 && diff !== 0); ++i) {
    for (left = i + 1, right = l - 1; (left < right && diff !== 0);) {
      tmp = nums[i] + nums[left] + nums[right];
      if (diff) {
        if (tmp > target) {
          if (tmp - target <= diff) {
            result = tmp;
            diff = tmp - target;
          }
          while (nums[right - 1] === nums[right]) --right;
          --right;
        } else if (tmp < target) {
          if (target - tmp <= diff) {
            result = tmp;
            diff = target - tmp;
          }
          while (nums[left + 1] === nums[left]) ++left;
          ++left;
        } else {
          result = target;
          diff = 0;
        }
      } else {
        result = tmp;
        diff = Math.abs(target - result);
      }
    }
  }
  return result;
};

module.exports = threeSumClosest;
