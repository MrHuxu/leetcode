/**
 * Problem: https://leetcode.com/problems/valid-parenthesis-string/description/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let left = 0, change = 0, mark = 0, right = 0;

  for (let i = 0; i < s.length; ++i) {
    if ('(' === s[i]) {
      ++left;
    } else if ('*' === s[i]) {
      if (left) {
        --left;
        ++change;
      } else {
        ++mark;
      }
    } else if (')' === s[i]) {
      if (left) {
        --left;
      } else if (mark){
        --mark;
      } else if (change) {
        --change;
        ++mark;
      } else {
        ++right;
      }
    }
  }

  return !left && !right;
};

module.exports = checkValidString;
