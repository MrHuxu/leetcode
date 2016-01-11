'use strict';

var removeDuplicates = function (nums) {
  var result = 0;
  var dup = 0;

  for (var i = 0, len = nums.length; i < len; ++i) {
    if (nums[i] !== nums[i - 1]) {
      dup = 0;
      ++result;
    } else {
      if (!dup) {
        ++dup;
        ++result;
      }
    }
  }

  return result;
};

var nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));