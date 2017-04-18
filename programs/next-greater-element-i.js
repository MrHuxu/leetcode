/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  var next = {};
  for (var i = 0; i < nums.length; ++i) {
    next[nums[i]] = -1;
    for (var j = 0; j < i; ++j) {
      if (nums[j] < nums[i] && -1 === next[nums[j]]) {
        next[nums[j]] = nums[i];
      }
    }
  }

  return findNums.map(function(findNum) {
    return next[findNum];
  });
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));