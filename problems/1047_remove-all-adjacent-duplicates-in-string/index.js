const { expect } = require('chai');

/**
 * @param {string} S
 * @return {string}
 */
let removeDuplicates = function(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      while (stack[stack.length - 1] === S[i]) stack.pop();
    } else stack.push(S[i]);
  }
  return stack.join('');
};

it('remove-all-adjacent-duplicates-in-string', () => {
  expect(removeDuplicates('abbaca')).to.eq('ca');
}); 