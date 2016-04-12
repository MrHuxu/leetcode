/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [],
      map = {')': '(', ']': '[', '}': '{'};
  if (s.length % 2 === 1) {
    return false;
  } else if (s.length === 0) {
    return true;
  } else {
    for (var i = 0, l = s.length; i < l; ++i) {
      if (stack.length === 0) {
        stack.push(s[i])
      } else {
        if (stack[stack.length - 1] === map[s[i]])
          stack.pop();
        else
          stack.push(s[i]);
      }
    }
    return stack.length === 0 ? true : false;
  }
};
