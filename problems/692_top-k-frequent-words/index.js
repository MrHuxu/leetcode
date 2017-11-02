/**
 * Problem: https://leetcode.com/problems/top-k-frequent-words/description/
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const times = {};
  for (let word of words) {
    times[word] = times[word] ? times[word] + 1 : 1;
  }
  return Object.keys(times).sort((w1, w2) => {
    if (times[w1] === times[w2]) {
      let i = 0, j = 0;
      while (w1[i] === w2[j]) {
        i++;
        j++;
      }
      if (w1[i] === undefined)
        return -1;
      else if (w2[j] === undefined)
        return 1;
      else
        return w1[i].charCodeAt() > w2[j].charCodeAt() ? 1 : -1;
    } else {
      return times[w1] > times[w2] ? -1 : 1;
    }
  }).slice(0, k);
};

module.exports = topKFrequent;
