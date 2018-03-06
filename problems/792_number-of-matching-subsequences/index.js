/**
 * Problem: https://leetcode.com/problems/number-of-matching-subsequences/description/
 */

const numberOfMatchingSubsequences = (S, words) => {
  const visit = words.reduce((pre, curr) => {
    if (pre[curr]) {
      pre[curr][1]++;
    } else {
      pre[curr] = [0, 1];
    }
    return pre;
  }, {});

  let result = 0;
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    for (let key of Object.keys(visit)) {
      if (ch === key[visit[key][0]]) {
        visit[key][0]++;
        if (visit[key][0] === key.length) {
          result += visit[key][1];
          delete visit[key];
        }
      }
    }
  }

  return result;
};

module.exports = numberOfMatchingSubsequences;
