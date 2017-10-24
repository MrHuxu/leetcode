/**
 * Problem: https://leetcode.com/problems/single-number-ii/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var cache = {};
  
  nums.forEach(function (num) {
    switch (cache[num]) {
    case undefined:
      cache[num] = 1;
      break;
    case 1:
      ++cache[num];
      break;
    case 2:
      delete cache[num];
    }
  });
  
  return parseInt(Object.keys(cache)[0], 10);
};
module.exports = singleNumber;
