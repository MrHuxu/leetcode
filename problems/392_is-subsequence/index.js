/**
 * Problem: https://leetcode.com/problems/is-subsequence/description/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var i, j = 0;
  for (i = 0; i < t.length && j < s.length; ++i) {
    if (t[i] === s[j]) ++j;
  }

  return j === s.length;
};
module.exports = isSubsequence;
