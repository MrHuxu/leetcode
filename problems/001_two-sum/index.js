/**
 * Problem: https://leetcode.com/problems/two-sum/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var tmp = {};
  for (var i = 0; i < nums.length; i++) {
    if (tmp[nums[i]])
      tmp[nums[i]].push(i + 1);
    else
      tmp[nums[i]] = [i + 1];
  }
  for (var i = 0; i < nums.length; i++) {
    if (tmp[target - nums[i]]) {
      if (target - nums[i] === nums[i]) {
        if (tmp[nums[i]].length > 1)
          return [tmp[nums[i]][0], tmp[nums[i]][1]];
        else
          continue;
      } else
        return [i + 1, tmp[target - nums[i]][0]];
    }
  }
};
module.exports = twoSum;
