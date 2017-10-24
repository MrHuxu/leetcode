/**
 * Problem: https://leetcode.com/problems/summary-ramges/description/
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  var result = [];
  for (var i = 0, l = nums.length; i < l;) {
    if (i === l - 1) {
      result.push(nums[i].toString());
      break;
    } else {
      for (var j = i + 1; j < l;) {
        if (1 === nums[j] - nums[j - 1])
          j++;
        else
          break;
      }
      if (j === i + 1) {
        result.push(nums[i].toString());
      } else {
        result.push(nums[i] + '->' + nums[j - 1]);
      }
      i = j;
    }
  }
  return result;
};

module.exports = summaryRanges;
