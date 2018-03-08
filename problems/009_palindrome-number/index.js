/**
 * Problem: https://leetcode.com/problems/palindrome-number/description/
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  const str = x.toString();
  let i = 0, j = str.length - 1;
  while(i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};

module.exports = isPalindrome;
