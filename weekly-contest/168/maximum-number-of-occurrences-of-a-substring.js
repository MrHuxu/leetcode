const { expect } = require('chai');

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
let maxFreq = function(s, maxLetters, minSize, maxSize) {
  let result = 0;
  let occurrences = {};

  for (let i = minSize - 1; i < s.length; i++) {
    let tmp = {};

    for (let j = i; j >= 0 && i - j + 1 <= maxSize; j--) {
      tmp[s[j]] = 0;

      if (Object.keys(tmp).length > maxLetters) break;
      else if (i - j + 1 >= minSize) {
        const subStr = s.slice(j, i + 1);
        if (occurrences[subStr] === undefined) occurrences[subStr] = 0;

        occurrences[subStr]++;
        result = Math.max(result, occurrences[subStr]);
      }
    }
  }

  return result;
};

it('maximum-number-of-occurrences-of-a-substring', () => {
  expect(maxFreq('aababcaab', 2, 3, 4)).to.eq(2);
  expect(maxFreq('aaaa', 1, 3, 3)).to.eq(2);
  expect(maxFreq('aabcabcab', 2, 2, 3)).to.eq(3);
  expect(maxFreq('abcde', 2, 3, 3)).to.eq(0);
});