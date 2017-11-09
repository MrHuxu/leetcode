/**
 * Problem: https://leetcode.com/problems/longest-word-in-dictionary/description/
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort((w1, w2) => w1.length > w2.length ? 1 : -1);
  const existance = words.reduce((pre, word) => {
    pre[word] = { exist: true };
    return pre;
  }, {});

  let result = [];
  for (let word of words) {
    let pre = word.split('').slice(0, word.length - 1).join('');

    if ((existance[pre] && existance[pre].hasPre) || 1 === word.length ) {
      existance[word].hasPre = true;

      if (result.length) {
        if (word.length > result[0].length) {
          result = [word];
        } else {
          result.push(word);
        }
      } else result.push(word);
    }
  }

  return result.sort()[0] || '';
};

module.exports = longestWord;
