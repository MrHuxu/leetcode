/**
 * Problem: https://leetcode.com/problems/sentence-similarity/description/
 */
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
  if (words1.length != words2.length) {
    return false;
  } else {
    const pairObj = pairs.reduce((pre, pair) => {
      if (pre[pair[0]]) {
        pre[pair[0]].push(pair[1]);
      } else {
        pre[pair[0]] = [pair[1]];
      }
      if (pre[pair[1]]) {
        pre[pair[1]].push(pair[0]);
      } else {
        pre[pair[1]] = [pair[0]];
      }
      return pre;
    }, {});

    for (let i = 0; i < words1.length; i++) {
      const word = words1[i];
      
      if (![...(pairObj[word] ? pairObj[word] : []), word].includes(words2[i])) return false;
    }
    return true;
  }
};

module.exports = areSentencesSimilar;
