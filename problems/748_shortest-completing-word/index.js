/**
 * Problem: https://leetcode.com/problems/shortest-completing-word/description/
 */

const shortestCompletingWord = (licensePlate, words) => {
  const wordsIdx = words.reduce((obj, word, i) => {
    obj[word] = i;
    return obj;
  }, {});
  let newWords = words.sort((w1, w2) => {
    if (w1.length === w2.length) {
      return wordsIdx[w1] > wordsIdx[w2] ? 1 : -1;
    } else {
      return w1.length > w2.length ? 1: -1;
    }
  }).reduce((arr, word) => {
    const obj = { word };
    for (let i = 0; i < word.length; i++) {
      const ch = word[i].toLowerCase();
      obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
    }
    arr.push(obj);
    return arr;
  }, []);

  for (let i = 0; i < licensePlate.length; i++) {
    const ch = licensePlate[i].toLowerCase();
    if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
      const nextNewWords = [];
      for (let word of newWords) {
        if (word[ch] >= 1) {
          word[ch]--;
          nextNewWords.push(word);
        }
      }
      newWords = nextNewWords;
    }
  }

  return newWords.shift().word;
};

module.exports = shortestCompletingWord;
