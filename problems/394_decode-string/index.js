/**
 * Problem: https://leetcode.com/problems/decode-string/description/
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  var stack = [], num, last, str, times, tmp;
  
  for (var i = 0; i < s.length; ++i) {
    num = s[i].charCodeAt();
    last = stack[stack.length - 1];

    if (num >= 48 && num <= 57) {
      if (Number.isInteger(last)) {
        stack[stack.length - 1] = last * 10 + num - 48;
      } else {
        stack.push(num - 48);
      }
    } else if (91 === num) {
      num = s[i + 1].charCodeAt();
      if (num >= 48 && num <= 57) {
        stack.push(num - 48);
      } else {
        stack.push(s[i + 1]);
      }
      ++i;
    } else if (93 === num) {
      str = '';
      while (tmp = stack.pop()) {
        if (Number.isInteger(tmp)) {
          times = tmp;
          break;
        } else {
          str = tmp + str;
        }
      }
      stack.push('');
      for (var j = 0; j < times; ++j) {
        stack[stack.length - 1] += str;
      }
    } else {
      if ('string' === typeof last) {
        stack[stack.length - 1] = last + s[i];
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.join('');
};
module.exports = decodeString;
