/**
 * Problem: https://leetcode.com/problems/longest-palindromic-substring/description/
 */
/**
 * @param {string} s
 * @return {string}
 */
var getLongestPalindrome = function (st, ed, str) {
  if (0 === st || ed === str.length - 1) {
    return [st, ed];
  } else {
    while (st > 0 && ed < str.length - 1 && str[st] === str[ed]) {
      st--;
      ed++;
    }
    return str[st] === str[ed] ? [st, ed] : [st + 1, ed - 1];
  }
};

var longestPalindrome = function(s) {
  var max = 1, longestStr = s[0], result;
  for (var i = 0, l = s.length; i < l; i++) {
    if (s[i + 1] && s[i] === s[i + 1]) {
      result = getLongestPalindrome(i, i + 1, s);
      flag = (result[1] - result[0] + 1) > max;
      max = flag ? result[1] - result[0] + 1 : max;
      longestStr = flag ? s.slice(result[0], result[1] + 1) : longestStr;
    }
    if (s[i + 1] && s[i - 1] && s[i + 1] === s[i - 1]) {
      result = getLongestPalindrome(i - 1, i + 1, s);
      flag = (result[1] - result[0] + 1) > max;
      max = flag ? result[1] - result[0] + 1 : max;
      longestStr = flag ? s.slice(result[0], result[1] + 1) : longestStr;
    }
  }
  return longestStr;
};

module.exports = longestPalindrome;
