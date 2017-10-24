/**
 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var maxLen = 0, subArr = [], index;
  for (var i = 0; i < s.length; i++) {
    index = subArr.indexOf(s[i]);
    if (index !== -1) {
      subArr = subArr.slice(index + 1, subArr.length);
    }
    subArr.push(s[i]);
    maxLen = subArr.length > maxLen ? subArr.length : maxLen;
  }
  return maxLen;
};
module.exports = lengthOfLongestSubstring;
