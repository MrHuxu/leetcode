/**
 * Problem: https://leetcode.com/problems/single-number/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var cache = {};
  
  nums.forEach(function (num) {
    if (cache[num])
      delete cache[num];
    else
      cache[num] = true;
  });
  
  return parseInt(Object.keys(cache)[0], 10);
};
module.exports = singleNumber;
