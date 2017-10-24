/**
 * Problem: https://leetcode.com/problems/find-the-difference/description/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var mapS = {}, mapT = {}, i, result;

  for (i = 0; i < s.length; ++i) {
    mapS[s[i]] = mapS[s[i]] ? ++mapS[s[i]] : 1;
  }

  for (i = 0; i < t.length; ++i) {
    if (mapS[t[i]]) {
      --mapS[t[i]];
    } else {
      result = t[i];
      break;
    }
  }

  return result;
};
module.exports = findTheDifference;
