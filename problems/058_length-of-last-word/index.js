/**
 * Problem: https://leetcode.com/problems/length-of-last-word/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var arr = s.split(' ').filter(function(e){return e.length > 0;});
  return arr.length > 0 ? arr[arr.length - 1].length : 0;
};
module.exports = lengthOfLastWord;
