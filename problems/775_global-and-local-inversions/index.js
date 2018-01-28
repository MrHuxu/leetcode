/**
 * Problem: https://leetcode.com/problems/global-and-local-inversions/description/
 */

const globalAndLocalInversions = A => {
  for (let i = 0; i < A.length; i++) {
    if (Math.abs(A[i] - i) > 1) return false;
  }
  return true;
};

module.exports = globalAndLocalInversions;
