const { expect } = require('chai');

/**
 * @param {string} s
 * @return {string}
 */
let reverseParentheses = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) { 
    if ('(' === s[i]) {
      stack.push('(', '');
    } else if (')' === s[i]) {
      let tmp = '';
      while (true) {
        let str = stack.pop();
        if ('(' === str) break;
        else {
          for (let j = str.length - 1; j >= 0; j--) {
            tmp += str[j];
          }
        }
      }
      stack.push(tmp);
    } else {
      if (!stack.length) stack.push(s[i]);
      else stack[stack.length - 1] += s[i];
    }
  }

  return stack.join('');
};

it('reverse-substrings-between-each-pair-of-parentheses', () => {
  expect(reverseParentheses('(abcd)')).to.eq('dcba');
  expect(reverseParentheses('(u(love)i)')).to.eq('iloveu');
  expect(reverseParentheses('a(bcdefghijkl(mno)p)q')).to.eq('apmnolkjihgfedcbq');
});