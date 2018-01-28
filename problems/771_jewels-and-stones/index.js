/**
 * Problem: https://leetcode.com/problems/jewels-and-stones/description/
 */

const jewelsAndStones = (J, S) => {
  const tmp = {};
  for (let i = 0; i < J.length; i++) {
    const ch = J[i];
    tmp[ch] = tmp[ch] ? tmp[ch] + 1 : 1;
  }
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (tmp[S[i]]) result++;
  }
  return result;
};

module.exports = jewelsAndStones;
