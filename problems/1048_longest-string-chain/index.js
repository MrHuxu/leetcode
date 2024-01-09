const { expect } = require('chai');

/**
 * @param {string[]} words
 * @return {number}
 */
let longestStrChain = function(words) {
  words.sort((a, b) => a.length > b.length ? 1 : -1);

  const checkPredecessor = (w1, w2) => {
    let i = 0, j = 0;
    while (i < w1.length && j < w2.length) {
      if (w1[i] === w2[j]) {
        i++;
        j++;
      } else {
        j++;
        break;
      }
    }

    if (i === w1.length) return true;
    else {
      while (i < w1.length && j < w2.length) {
        if (w1[i] === w2[j]) {
          i++;
          j++;
        } else {
          return false;
        }
      }
      return true;
    }
  };

  const mapLenToWord = {};
  for (let word of words) {
    if (mapLenToWord[word.length] === undefined) mapLenToWord[word.length] = [word];
    else mapLenToWord[word.length].push(word);
  }

  let result = 1;
  const results = {};
  for (let word of words) {
    results[word] = 1;
    if (mapLenToWord[word.length - 1] !== undefined) {
      for (let preWord of mapLenToWord[word.length - 1]) {
        if (checkPredecessor(preWord, word)) results[word] = Math.max(results[word], results[preWord] + 1);
      }
      result = Math.max(result, results[word]);
    }
  }
  return result;
};

it ('longest-string-chain', () => {
  expect(longestStrChain(['a','b','ba','bca','bda','bdca'])).to.eq(4);
  expect(longestStrChain(['qyssedya','pabouk','mjwdrbqwp','vylodpmwp','nfyqeowa','pu','paboukc','qssedya','lopmw','nfyqowa','vlodpmw','mwdrqwp','opmw','qsda','neo','qyssedhyac','pmw','lodpmw','mjwdrqwp','eo','nfqwa','pabuk','nfyqwa','qssdya','qsdya','qyssedhya','pabu','nqwa','pabqoukc','pbu','mw','vlodpmwp','x','xr'])).to.eq(8);
});