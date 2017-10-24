/**
 * Problem: https://leetcode.com/problems/valid-palindrome-ii/description/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let flag = false;

  const traverse = (i, j, changed) => {
    if (flag) return;
    while (s[i] === s[j] && i < j) {
      i += 1;
      j -= 1;
    }
    if (i >= j) {
      flag = true;
      return;
    }
    if (!changed) {
      if (s[i + 1] === s[j]) {
        traverse(i + 1, j, true);
      }

      if (s[i] === s[j - 1]) {
        traverse(i, j - 1, true);
      }
    }
  };
  traverse(0, s.length - 1, false);

  return flag;
};
module.exports = validPalindrome;
