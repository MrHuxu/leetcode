/**
 * Problem: https://leetcode.com/problems/valid-anagram/description/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var len1 = s.length, len2 = t.length;
  if (len1 !== len2) return false;
  s = s.split('').sort().join();
  t = t.split('').sort().join();
  
  return s === t;
};
module.exports = isAnagram;
