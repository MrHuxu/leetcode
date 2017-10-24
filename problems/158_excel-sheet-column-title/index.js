/**
 * Problem: https://leetcode.com/problems/excel-sheet-column-title/description/
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var result = [];
  while (n > 26) {
    if (0 === n % 26) {
      result.unshift(90);
      n = n / 26 - 1;
      break;
    } else {
      result.unshift(n % 26 + 64);
      n = parseInt(n / 26);
    }
  }
  result.unshift(n + 64);

  return String.fromCharCode.apply(null, result);
};
module.exports = convertToTitle;
