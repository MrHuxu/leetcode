/**
 * Problem: https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let max = 0;

  const dfs = (i, j, len) => {
    if (A[i] === undefined || B[j] === undefined) {
      max = Math.max(max, len);
    } else {
      let m = i, n = j, o = len;
      if (A[i] === B[j]) {
        while (A[m] !== undefined && B[n] !== undefined && A[m] === B[n]) {
          m++;
          n++;
          o++;
        }
        dfs(m, n, o);
      } else {
        max = Math.max(max, len);
      }
      if (Math.max(A.length - i, B.length - j) > Math.max(o, max)) {
        dfs(i + 1, j, 0);
        dfs(i, j + 1, 0);
      }
    }
  };
  dfs(0, 0, 0);

  return max;
};

module.exports = findLength;
