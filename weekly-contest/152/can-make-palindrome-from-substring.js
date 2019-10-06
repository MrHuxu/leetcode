const { expect } = require('chai');

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
let canMakePaliQueries = function(s, queries) {
  const result = [];

  const check = (str, n) => {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) n--;
      if (n < 0) return false;
    }
    return true;
  };

  for (let q of queries) {
    result.push(check(s.slice(q[0], q[1] + 1), q[2]));
  }

  return result;
};

it('can-make-palindrome-from-substring', () => {
  // expect(canMakePaliQueries('abcda',[[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]])).to.deep.eq([true,false,false,true,true]);
  expect(canMakePaliQueries('hunu', [[0,3,1]])).to.deep.eq([true]);
});