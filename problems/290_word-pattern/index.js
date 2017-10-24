/**
 * Problem: https://leetcode.com/problems/word-pattern/description/
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var arr = str.split(' ');
  var map = {}, reverseMap = {}, flag = arr.length === pattern.length;

  if (flag) {
    for (var i = 0, len = pattern.length; i < len; ++i) {
      if (map[pattern[i]] === undefined && reverseMap[arr[i]] === undefined) {
        map[pattern[i]] = arr[i];
        reverseMap[arr[i]] = pattern[i];
      } else {
        flag = map[pattern[i]] === arr[i] && reverseMap[arr[i]] === pattern[i];
        if (!flag) break;
      }
    }
  }
  
  return flag;
};
module.exports = wordPattern;
