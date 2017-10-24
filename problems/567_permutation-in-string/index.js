/**
 * Problem: https://leetcode.com/problems/permutation-in-string/description/
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  var existance = {}, sum = s1.length, l1 = s1.length; l2 = s2.length;
  for (var i = 0; i < l1; ++i) {
    existance[s1[i]] = existance[s1[i]] ? ++existance[s1[i]] : 1;
  }

  for (var j = 0; j < l2; ++j) {
    if (existance[s2[j]] !== undefined) {
      --existance[s2[j]];
      --sum;
    }

    if (existance[s2[j - l1]] !== undefined) {
      ++existance[s2[j - l1]];
      ++sum;
    }

    if (!sum) {
      var flag = true;
      for (var key in existance) {
        if (existance[key]) {
          flag = false;
          break;
        }
      }
      if (flag) return true;
    }
  }
  return false;
};
module.exports = checkInclusion;
