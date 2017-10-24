/**
 * Problem: https://leetcode.com/problems/palindrome-number/description/
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var str = x.toString();
  return str === str.split('').reverse().join('');
};

module.exports = isPalindrome;
