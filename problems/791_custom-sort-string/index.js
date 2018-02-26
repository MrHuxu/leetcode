/**
 * Problem: https://leetcode.com/problems/custom-sort-string/description/
 */

const customSortString = (S, T) => {
  const idx = Array.from(S).reduce((pre, curr, i) => {
    pre[curr] = i + 1;
    return pre;
  }, {});
  return T.split('').sort((a, b) => {
    if (idx[a] && idx[b]) {
      return idx[a] > idx[b] ? 1 : -1;
    } else if (!idx[a]) {
      return 1;
    } else {
      return -1;
    }
  }).join('');
};

module.exports = customSortString;
