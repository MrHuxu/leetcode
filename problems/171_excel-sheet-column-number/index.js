/**
 * Problem: https://leetcode.com/problems/excel-sheet-column-number/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var len = s.length, mul = 1;
  var result = 0;

  for (var i = len - 1; i >= 0; --i) {
    var num = s[i].charCodeAt() - 64;
    result += num * mul;
    mul *= 26;
  }

  return result;
};
module.exports = titleToNumber;
