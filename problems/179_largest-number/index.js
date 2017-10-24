/**
 * Problem: https://leetcode.com/problems/largest-number/description/
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort(function (a, b) {
    var strA = a.toString();
    var strB = b.toString();

    var str1 = strA + strB;
    var str2 = strB + strA;

    if (str1 > str2)
      return 1;
    else if (str1 < str2)
      return -1;
    else
      return 0;
  }).reverse();

  var i, len = nums.length;
  for (i = 0; i < len; ++i) {
    if (nums[i] !== 0 || i === len - 1) break;
  }
  return nums.slice(i).join('');
};
module.exports = largestNumber;
