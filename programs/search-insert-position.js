var searchInsert = function (nums, target) {
  var result;
  if (0 === nums.length) {
    result = 0;
  } else {
    if (nums[0] > target)
      result = 0;
    else if (nums[nums.length - 1] < target)
      result = nums.length;
    else {
      for (var i = 0, l = nums.length; i < l; ++i) {
        if (nums[i] === target) {
          result = i;
          break;
        } else {
          if (nums[i] < target && (nums[i + 1] > target || nums[i + 1] === undefined)) {
            result = i + 1;
            break;
          }
        }
      }
    }
  }
  return result;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
