/**
 * Problem: https://leetcode.com/problems/longest-common-prefix/description/
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (0 === strs.length)
    return '';
  else if (1 === strs.length)
    return strs[0];
  else {
    var result = '', i, l, j = 0, finish;
    while (true) {
      finish = false;
      for (i = 0, l = strs.length; i < l - 1; ++i) {
        if (!strs[i] || !strs[i + 1] || !strs[i][j] || !strs[i + 1][j]) {
          console.log('hihi');
          finish = true;
          break;
        } else if (strs[i][j] !== strs[i + 1][j]){
          finish = true;
          break;
        }
      }
      if (finish) {
        break;
      } else {
        result += strs[i][j];
        ++j;
      }
    }
  }
  return result;
};
module.exports = longestCommonPrefix;
