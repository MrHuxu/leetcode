/**
 * Problem: https://leetcode.com/problems/expressive-words/description/
 */

const expressiveWords = (S, words) => {
  const validate = word => {
    let i = j = 0;

    while (i < S.length || j < word.length) {
      if (S[i] !== word[j]) return false;
      else {
        let tmpi = i, tmpj = j;
        while (S[i] === S[tmpi]) i++;
        while (word[j] === word[tmpj]) j++;
        if ((i - tmpi < j - tmpj) || ((i - tmpi > j - tmpj) && (i - tmpi < 3))) return false;
      }
    }

    return true;
  };

  return words.reduce((pre, word) => validate(word) ? pre + 1 : pre, 0);
};

module.exports = expressiveWords;
