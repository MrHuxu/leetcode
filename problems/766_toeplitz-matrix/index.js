/**
 * Problem: https://leetcode.com/problems/toeplitz-matrix/description/
 */

const toeplitzMatrix = matrix => {
  const M = matrix.length;
  if (!M) return true;

  const N = matrix[0].length;

  for (let i = 0; i < N; i++) {
    const base = matrix[0][i];
    for (let j = 1, k = i + 1; j < M && k < N; j++, k++) {
      if (matrix[j][k] !== base) return false;
    }
  }

  for (let i = 1; i < M; i++) {
    const base = matrix[i][0];
    for (let j = i + 1, k = 1; j < M && k < N; j++, k++) {
      if (matrix[j][k] != base) return false;
    }
  }

  return true;
};

module.exports = toeplitzMatrix;
