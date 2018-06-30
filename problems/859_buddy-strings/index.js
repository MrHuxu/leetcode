/**
 * Problem: https://leetcode.com/problems/buddy-strings/description/
 */

const buddyStrings = (A, B) => {
  if (A.length != B.length) return false;

  if (A === B) {
    let exists = {};
    for (let i = 0; i < A.length; i++) {
      if (!exists[A[i]]) exists[A[i]] = true;
      else return true;
    }
  }

  const diffs = [[], []];
  for (let i = 0; i < A.length; i++) {
    if (A[i] != B[i]) {
      diffs[0].push(A[i]);
      diffs[1].push(B[i]);
    }
  }
  
  if (diffs[0].length != 2) return false;

  if (diffs[0][0] === diffs[1][1] && diffs[0][1] === diffs[1][0]) return true;
  return false;
};

module.exports = buddyStrings;
