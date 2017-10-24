/**
 * Problem: https://leetcode.com/problems/implement-strstr/description/
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var flag, l1 = haystack.length, l2 = needle.length;
  for (var i = 0; i <= l1 - l2; ++i) {
    flag = true;
    for (var j = 0; j < l2; ++j) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag)
      break;
  }
  return flag ? i : -1;
};

module.exports = strStr;
