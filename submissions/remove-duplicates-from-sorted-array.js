/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length === 0) return 0;
  var count = 0;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[count]) {
      nums[count + 1] = nums[i];
      ++count;
    }
  }
  return count + 1;
};
