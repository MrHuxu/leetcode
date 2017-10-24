/**
 * Problem: https://leetcode.com/problems/roman-to-integer/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var len = s.length, sum = 0, cur = 0, level = null;
  var letterToNum = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  };

  for (var i = 0; i < len; ++i) {
    var num = letterToNum[s[i]];
    if (level) {
      if (level === num) {
        cur += num;
      } else if (level < num) {
        sum += num - cur;
        cur = 0;
        level = null;
      } else {
        sum += cur;
        cur = num;
        level = num;
      }
    } else {
      cur += num;
      level = num;
    }
  }

  sum += cur;
  return sum;
};
module.exports = romanToInt;
