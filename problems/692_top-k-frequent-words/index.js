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

  const larger = (w1, w2) => {
    if (times[w1] === times[w2]) {
      let i = 0, j = 0;
      while (w1[i] === w2[j]) {
        i++;
        j++;
      }
      if (w1[i] === undefined)
        return false;
      else if (w2[j] === undefined)
        return true;
      else
        return w1[i].charCodeAt() > w2[j].charCodeAt();
    } else {
      return times[w1] < times[w2];
    }
  };

  const uniqWords = Object.keys(times), result = [];
  let curr, left, right, tmp;
  for (let i = 0; i < k; i++) {
    for (let j = parseInt(uniqWords.length / 2); j > 0; j--) {
      curr = j - 1;
      left = j * 2 - 1;
      right = j * 2;
      
      if (larger(uniqWords[curr], uniqWords[left])) {
        tmp = uniqWords[curr];
        uniqWords[curr] = uniqWords[left];
        uniqWords[left] = tmp;
      }

      if (larger(uniqWords[curr], uniqWords[right])) {
        tmp = uniqWords[curr];
        uniqWords[curr] = uniqWords[right];
        uniqWords[right] = tmp;
      }
    }

    result.push(uniqWords.shift());
  }
  
  return result;
};

