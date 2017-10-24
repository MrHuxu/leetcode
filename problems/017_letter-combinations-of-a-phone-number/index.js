/**
 * Problem: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (0 === digits.length) return [];
  var result = [];
  var map = {
    '1' : '',
    '2' : 'abc',
    '3' : 'def',
    '4' : 'ghi',
    '5' : 'jkl',
    '6' : 'mno',
    '7' : 'pqrs',
    '8' : 'tuv',
    '9' : 'wxyz',
    '0' : ' '
  };
  var dfs = function (str, depth) {
    if (depth === digits.length) {
      result.push(str);
      return;
    } else {
      for (var i = 0, l = map[digits[depth]].length; i < l; ++i) {
        dfs(str + map[digits[depth]][i], depth + 1);
      }
    }
  };
  dfs('', 0);
  return result;
};
module.exports = letterCombinations;
