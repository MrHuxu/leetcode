/**
 * Problem: https://leetcode.com/problems/generate-parentheses/description/
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const result = [];
  const search = (str, n, left, sum) => {
    if (left === n) {
      while (sum--) str = str + ')';
      if (str.length === n * 2)
        result.push(str);
      return;
    }
    for (let j = left; j < n; ++j) {
      search(str + '(', n, j + 1, sum + 1);
    }
    for (let j = sum; j > 0; --j) {
      search(str + ')', n, left, j - 1);
    }
  };
  search('', n, 0, 0);
  return result;
};

module.exports = generateParenthesis;
