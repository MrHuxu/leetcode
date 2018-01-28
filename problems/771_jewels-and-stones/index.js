/**
 * Problem: https://leetcode.com/problems/jewels-and-stones/description/
 */

const jewelsAndStones = (J, Z) => {
  const tmp = {};
  for (let i = 0; i < J.length; i++) {
    const ch = J[i];
    tmp[ch] = tmp[ch] ? tmp[ch] + 1 : 1;
  }
  let result = 0;
  for (let i = 0; i < Z.length; i++) {
    if (tmp[Z[i]]) result++;
  }
  return result;
};

module.exports = jewelsAndStones;
