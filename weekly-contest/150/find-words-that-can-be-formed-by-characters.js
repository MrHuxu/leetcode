const { expect } = require('chai');

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
let countCharacters = function(words, chars) {
  const m = {};
  for (let i = 0; i < chars.length; i++) m[chars[i]] = m[chars[i]] ? m[chars[i]] + 1 : 1;

  let result = 0;
  for (let word of words) {
    const tmp = Object.assign({}, m);
    let canFind = true;
    for (let i = 0; i < word.length; i++) {
      if (tmp[word[i]]) tmp[word[i]]--;
      else {
        canFind = false;
        break;
      }
    }
    if (canFind) result += word.length;
  }
  return result;
};

it('find-words-that-can-be-formed-by-characters', () => {
  expect(countCharacters(['cat','bt','hat','tree'], 'atach')).to.eq(6);
  expect(countCharacters(['hello','world','leetcode'], 'welldonehoneyr')).to.eq(10);
});