/**
 * Problem: https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var frequency = {}, visit = {}, result = [];
  for (var i = 0; i < p.length; ++i) {
    frequency[p[i]] = frequency[p[i]] ? ++frequency[p[i]] : 1;
  }
  for (var i = 0; i < p.length; ++i) {
    visit[s[i]] = visit[s[i]] ? ++visit[s[i]] : 1;
  }

  var checkMatch = function (obj1, obj2) {
    for (var key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };

  for (var i = 0; i < s.length - p.length + 1; ++i) {
    if (checkMatch(frequency, visit)) result.push(i);
    --visit[s[i]];
    visit[s[i + p.length]] = visit[s[i + p.length]] ? ++visit[s[i + p.length]] : 1;
  }

  return result;
};

