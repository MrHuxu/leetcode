/**
 * Problem: https://leetcode.com/problems/number-of-segments-in-a-string/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(' ').filter(function (i) {
    return i.length;
  }).length;
};
module.exports = countSegments;
