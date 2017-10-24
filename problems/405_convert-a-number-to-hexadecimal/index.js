/**
 * Problem: https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  var num = num < 0 ? 4294967296 + num : num;
  var result = '';

  var itoa = function (i) {
    return i < 10 ? i.toString() : String.fromCharCode(i + 87);
  };

  var calc = function (n) {
    if (n > 15) {
      result = itoa(n % 16) + result;
      calc(parseInt(n / 16));
    } else {
      result = itoa(n) + result;
    }
  };

  calc(num);
  return result;
};
module.exports = toHex;
