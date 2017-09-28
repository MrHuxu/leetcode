/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var start = 0, end = nums.length - 1, mid, index, exist = false;
  while (true) {
    if (nums[start] > target || nums[end] < target) {
      break;
    } else if (nums[start] === target || nums[end] === target) {
      exist = true;
      index = nums[start] === target ? start : null;
      index = (null === index && nums[end] === target) ? end : index;
      break;
    } else {
      if (end - start <= 1)
        break;
      else {
        mid = parseInt((start + end) / 2);
        if (nums[mid] === target) {
          index = mid;
          exist = true;
          break;
        } else if (nums[mid] < target){
          start = mid;
        } else {
          end = mid;
        }
      }
    }
  }
  if (exist) {
    start = index, end = index;
    for (start; start >= 0 && nums[start] === target; --start) ;
    for (end; end < nums.length && nums[end] === target; ++end);
    return [start + 1, end - 1];
  } else {
    return [-1, -1];
  }
};

module.exports = searchRange;
