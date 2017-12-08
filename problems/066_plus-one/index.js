/**
 * Problem: https://leetcode.com/problems/plus-one/description/
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let plus = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + (plus ? 1 : 0);
    digits[i] = sum % 10;
    plus = sum >= 10;
  }
  if (plus) digits.unshift(1);
  return digits;
};

module.exports = plusOne;
