/**
 * Problem: https://leetcode.com/problems/reverse-string/description/
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  return s.split('').reverse().join('');
};
module.exports = reverseString;
