/**
 * Problem: https://leetcode.com/problems/valid-parentheses/description/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [],
    map = { ')': '(', ']': '[', '}': '{' };
  if (1 === s.length % 2) {
    return false;
  } else if (0 === s.length) {
    return true;
  } else {
    for (var i = 0, l = s.length; i < l; ++i) {
      if (0 === stack.length) {
        stack.push(s[i]);
      } else {
        if (stack[stack.length - 1] === map[s[i]])
          stack.pop();
        else
          stack.push(s[i]);
      }
    }
    return 0 === stack.length ? true : false;
  }
};

module.exports = isValid;
