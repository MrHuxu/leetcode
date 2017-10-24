/**
 * Problem: https://leetcode.com/problems/add-digits/description/
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num ? (num % 9 ? num % 9 : 9) : 0;
};
module.exports = addDigits;
