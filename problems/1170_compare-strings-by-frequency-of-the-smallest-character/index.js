const { expect } = require('chai');

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
let numSmallerByFrequency = function(queries, words) {
  const queryRes = queries.map(q => {
    let minCh = q[0];
    const m = { [q[0]]: 1 };

    for (let i = 1; i < q.length; i++) {
      m[q[i]] = m[q[i]] ? m[q[i]] + 1 : 1;
      minCh = q[i] < minCh ? q[i] : minCh;
    }
    return m[minCh];
  });
  const wordRes = words.map(w =>{
    let minCh = w[0];
    const m = { [w[0]]: 1 };

    for (let i = 1; i < w.length; i++) {
      m[w[i]] = m[w[i]] ? m[w[i]] + 1 : 1;
      minCh = w[i] < minCh ? w[i] : minCh;
    }
    return m[minCh];
  });

  const result = [];
  for (let i = 0; i < queryRes.length; i++) {
    result[i] = 0;
    for (let j = 0; j < wordRes.length; j++) {
      if (queryRes[i] < wordRes[j]) result[i]++;
    }
  }
  return result;
};

it('compare-strings-by-frequency-of-the-smallest-character', () => {
  expect(numSmallerByFrequency(['cbd'], ['zaaaz'])).to.deep.eq([1]);
  expect(numSmallerByFrequency(['bbb','cc'], ['a','aa','aaa','aaaa'])).to.deep.eq([1, 2]);
});