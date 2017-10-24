/**
 * Problem: https://leetcode.com/problems/longest-palindrome/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (!s.length) return 0;

  var existance = {};
  for (var i = 0; i < s.length; ++i) {
    if (existance[s[i]]) {
      delete existance[s[i]];
    } else {
      existance[s[i]] = true;
    }
  }

  if (Object.keys(existance).length) {
    return s.length - Object.keys(existance).length + 1;
  } else {
    return s.length;
  }
};
module.exports = longestPalindrome;
