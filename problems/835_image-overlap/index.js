/**
 * Problem: https://leetcode.com/problems/image-overlap/description/
 */

const imageOverlap = (A, B) => {
  const m = A.length, n = A[0].length;
  const nodes = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j]) nodes.push([i, j]);
    }
  }
  let max = 0;
  for (let i = -(m - 1); i < m; i++) {
    for (let j = -(n - 1); j < n; j++) {
      let count = 0;
      for (let node of nodes) {
        if (B[node[0] + i] && B[node[0] + i][node[1] + j]) count++;
      }
      max = Math.max(max, count);
    }
  }

  return max;
};

module.exports = imageOverlap;
