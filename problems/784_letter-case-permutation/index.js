/**
 * Problem: https://leetcode.com/problems/letter-case-permutation/description/
 */

const letterCasePermutation = S => {
  const regenerateUpperStr = (str, i) => str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
  const regenerateLowerStr = (str, i) => str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);

  const results = {};
  const traverse = str => {
    if (!results[str]) {
      results[str] = true;
      for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
          traverse(regenerateUpperStr(str, i));
        }
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
          traverse(regenerateLowerStr(str, i));
        }
      }
    }
  };
  traverse(S);
  return Object.keys(results);
};

module.exports = letterCasePermutation;
