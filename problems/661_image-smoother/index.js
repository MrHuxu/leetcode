/**
 * Problem: https://leetcode.com/problems/image-smoother/description/
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const result = [];
  for (let i = 0; i < M.length; i++) result.push([]);
  const { floor } = Math;

  const calc = (i, j) => {
    let count = 1;
    let sum = M[i][j];
    
    if (M[i - 1]) {
      if (M[i - 1][j - 1] !== undefined) {
        count++;
        sum += M[i - 1][j - 1];
      }
      if (M[i - 1][j] !== undefined) {
        count++;
        sum += M[i - 1][j];
      }
      if (M[i - 1][j + 1] !== undefined) {
        count++;
        sum += M[i - 1][j + 1];
      }
    }
    if (M[i][j - 1] !== undefined) {
      count++;
      sum += M[i][j - 1];
    }
    if (M[i][j + 1] !== undefined) {
      count++;
      sum += M[i][j + 1];
    }
    if (M[i + 1]) {
      if (M[i + 1][j - 1] !== undefined) {
        count++;
        sum += M[i + 1][j - 1];
      }
      if (M[i + 1][j] !== undefined) {
        count++;
        sum += M[i + 1][j];
      }
      if (M[i + 1][j + 1] !== undefined) {
        count++;
        sum += M[i + 1][j + 1];
      }
    }
    return floor(sum / count);
  };

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < (M[0] && M[0].length); j++) {
      result[i][j] = calc(i, j);
    }
  }

  return result;
};

module.exports = imageSmoother;
