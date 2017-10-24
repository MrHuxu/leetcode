/**
 * Problem: https://leetcode.com/problems/compare-version-numbers/description/
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var arr1 = version1.split('.'), arr2 = version2.split('.');
  var num1, num2, len = Math.max(arr1.length, arr2.length);

  var result = 0;
  for (var i = 0; i < len; ++i) {
    num1 = arr1[i] === undefined ? 0 : parseInt(arr1[i]);
    num2 = arr2[i] === undefined ? 0 : parseInt(arr2[i]);
    if (num1 > num2) {
      result = 1;
      break;
    } else if (num1 < num2) {
      result = -1;
      break;
    }
  }

  return result;
};
module.exports = compareVersion;
