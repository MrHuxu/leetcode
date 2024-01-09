const { expect } = require('chai');

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
let findOcurrences = function(text, first, second) {
  const words = text.split(' ');
  const result = [];

  if (words.length < 3) return result;

  for (let i = 1; i < words.length - 1; i++) {
    if (words[i - 1] === first && words[i] === second) result.push(words[i + 1]);
  }
  return result;
};

it('occurrences-after-bigram', () => {
  expect(findOcurrences('alice is a good girl she is a good student', 'a', 'good')).to.deep.eq(['girl', 'student']);
  expect(findOcurrences('we will we will rock you', 'we', 'will')).to.deep.eq(['we', 'rock']);
});