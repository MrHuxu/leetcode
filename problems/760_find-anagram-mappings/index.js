/**
 * Problem: https://leetcode.com/problems/find-anagram-mappings/description/
 */

const findAnagramMappings = (A, B) => {
  const Bpos = B.reduce((pre, b, i) =>{
    pre[b] = i;
    return pre;
  }, {});
  return A.map(a => Bpos[a]);
};

module.exports = findAnagramMappings;
