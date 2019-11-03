const { expect } = require('chai');

/**
 * @param {string} s
 * @return {string}
 */
let minRemoveToMakeValid = function(s) {
  const parentheseStack = [];
  const positionStack = [];
  for (let i = 0; i < s.length; i++) {
    if ('(' === s[i]) {
      parentheseStack.push(s[i]);
      positionStack.push(i);
    } else if (')' === s[i]) {
      if ('(' === parentheseStack[parentheseStack.length - 1]) {
        parentheseStack.pop();
        positionStack.pop();
      } else {
        parentheseStack.push(')');
        positionStack.push(i);
      }
    }
  }

  let result = '', positionStackIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === positionStack[positionStackIdx]) {
      positionStackIdx++;
    } else {
      result += s[i];
    }
  }

  return result;
};

it('minimum-remove-to-make-valid-parentheses', () => {
  expect(minRemoveToMakeValid('lee(t(c)o)de)')).to.eq('lee(t(c)o)de');
  expect(minRemoveToMakeValid('a)b(c)d')).to.eq('ab(c)d');
});