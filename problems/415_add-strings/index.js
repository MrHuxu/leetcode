/**
 * Problem: https://leetcode.com/problems/add-strings/description/
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var addChars = function (ch1, ch2, plus) {
    var n1 = ch1.charCodeAt() - 48, n2 = ch2.charCodeAt() - 48, hasPlus = false;
    var result = n1 + n2 + (plus ? 1 : 0);
    return [result % 10, result > 9];
  };

  var len1 = num1.length, len2 = num2.length;
  var len = Math.max(len1, len2);
  var result = '', plus = false;
  for (var i = 0; i < len; ++i) {
    var data = addChars(num1[len1 - 1 - i] || '0', num2[len2 - 1 - i] || '0', plus);
    result = String.fromCharCode(data[0] + 48) + result;
    plus = data[1];
  }
  if (plus) result = '1' + result;

  return result;
};
module.exports = addStrings;
