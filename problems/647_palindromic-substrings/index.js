/**
 * Problem: https://leetcode.com/problems/palindromic-substrings/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const isPalindromic = str => {
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  };

  let dp = [], result = 0;
  for (let i = 0; i < s.length; i++) {
    const nextDp = [];
    for (let str of dp) {
      const nextStr = str + s[i];
      nextDp.push(nextStr);
      if (isPalindromic(nextStr)) result++;
    }

    nextDp.push(s[i]);
    dp = nextDp;
    result++;
  }

  return result;
};

module.exports = countSubstrings;
