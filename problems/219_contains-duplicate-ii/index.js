/**
 * Problem: https://leetcode.com/problems/contains-duplicate-ii/description/
 */
var containsNearbyDuplicate = function(nums, k) {
  var flag = false, cached = {};
  
  for (var i = 0; i < nums.length; ++i) {
    if (!cached[nums[i]]) {
      cached[nums[i]] = [i];
    } else {
      var len = cached[nums[i]].length;
      if (i - cached[nums[i]][len - 1] <= k) {
        flag = true;
        break;
      } else {
        cached[nums[i]].push(i);
      }
    }
  }
  
  return flag;
};
module.exports = containsNearbyDuplicate;
