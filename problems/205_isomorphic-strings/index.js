/**
 * Problem: https://leetcode.com/problems/isomorphic-strings/description/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;

  var len = s.length, map = {}, reverseMap = {};
  var flag = true;
  for (var i = 0; i < len; ++i) {
    if (map[s[i]] === undefined && reverseMap[t[i]] === undefined) {
      map[s[i]] = t[i];
      reverseMap[t[i]] = s[i];
    } else {
      if (map[s[i]] !== t[i] || reverseMap[t[i]] !== s[i]) {
        flag = false;
        break;
      }
    }
  }

  return flag;
};
module.exports = isIsomorphic;
