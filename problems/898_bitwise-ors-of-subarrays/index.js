/**
 * Problem: https://leetcode.com/problems/bitwise-ors-of-subarrays/description/
 */

const bitwiseOrsOfSubarrays = A => {
  const exists = {};
  let dp = {};
  for (let num of A) {
    const newDp = {};
    for (let key of Object.keys(dp)) {
      newDp[parseInt(key) | num] = true;
      exists[parseInt(key) | num] = true;
    }
    
    newDp[num] = true;
    exists[num] = true;
    dp = newDp;
  }

  return Object.keys(exists).length;
};

module.exports = bitwiseOrsOfSubarrays;
