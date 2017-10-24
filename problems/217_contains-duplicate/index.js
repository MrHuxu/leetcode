/**
 * Problem: https://leetcode.com/problems/contains-duplicate/description/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var visited = {}, flag = false;
  
  for (var i = 0, len = nums.length; i < len; ++i) {
    if (!visited[nums[i]])
      visited[nums[i]] = true;
    else {
      flag = true;
      break;
    }
  }
  
  return flag;
};
module.exports = containsDuplicate;
