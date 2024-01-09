const { expect } = require('chai');

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
let equalSubstring = function(s, t, maxCost) {
  const costs = [];
  for (let i = 0; i < s.length; i++) costs.push(Math.abs(s[i].charCodeAt() - t[i].charCodeAt()));

  let result = 0;
  let pre, sum = 0;
  for (let i = 0; i < costs.length; i++) {
    const cost = costs[i];
    if (cost > maxCost) {
      pre = undefined;
      sum = 0;
      continue;
    }
    
    sum += cost;
    if (sum <= maxCost) {
      if (pre === undefined) pre = i;
      result = Math.max(result, i - pre + 1);
    } else {
      while (sum > maxCost) {
        sum -= costs[pre];
        pre++;
      }
    }
  }

  return result;
};

it('get-equal-substrings-within-budget', () => {
  expect(equalSubstring('abcd', 'bcdf', 3)).to.eq(3);
  expect(equalSubstring('abcd', 'cdef', 3)).to.eq(1);
  expect(equalSubstring('krrgw', 'zjxss', 19)).to.eq(2);
  expect(equalSubstring('anryddgaqpjdw','zjhotgdlmadcf', 5)).to.eq(1);
  expect(equalSubstring('ujteygggjwxnfl', 'nstsenrzttikoy', 43)).to.eq(5);
});