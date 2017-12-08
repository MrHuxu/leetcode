/**
 * Problem: https://leetcode.com/problems/add-binary/description/
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const lenA = a.length, lenB = b.length;
  let plus = 0, result = '';
  for (let i = 0; i < lenA || i < lenB; i++) {
    const numA = a[lenA - 1 - i] ? a[lenA - 1 - i].charCodeAt() - 48 : 0;
    const numB = b[lenB - 1 - i] ? b[lenB - 1 - i].charCodeAt() - 48 : 0;
    const sum = numA + numB + plus;
    result = (sum & 1) + result;
    plus = (sum >> 1) & 1;
  }
  if (plus) result = plus + result;
  return result;
};

module.exports = addBinary;
