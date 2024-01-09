const { expect } = require('chai');

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let removeDuplicates = function(s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) stack.push([s[i], 1]);
    else {
      if (stack[stack.length - 1][0] === s[i]) stack.push([
        s[i], stack[stack.length - 1][1] + 1
      ]);
      else stack.push([s[i], 1]);

      if (stack[stack.length - 1][1] === k) {
        for (let i = 0; i < k; i++) stack.pop();
      }
    }
  }

  return stack.reduce((pre, curr) => {
    return pre += curr[0];
  }, '');
};

it('remove-all-adjacent-duplicates-in-string-ii', () => {
  expect(removeDuplicates('abcd', 2)).to.eq('abcd');
  expect(removeDuplicates('deeedbbcccbdaa', 3)).to.eq('aa');
  expect(removeDuplicates('pbbcggttciiippooaais', 2)).to.eq('ps');
});