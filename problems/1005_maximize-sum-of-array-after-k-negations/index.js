/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a < b ? 1 : -1);

  for (let i = A.length - 1; i >= 0; i--) {
    if (K > 0) {
      if (A[i] < 0) {
        A[i] = -A[i];
        K--;
      } else if (0 == A[i]) {
        break;
      } else {
        if (0 == K % 2)
          break;
        else {
          if (A[i + 1] !== undefined) {
            if (A[i + 1] > A[i])
              A[i] = -A[i];
            else
              A[i + 1] = -A[i + 1];
          } else {
            A[i] = -A[i];
          }
          break;
        }
      }
    } else break;
  }

  return A.reduce((pre, curr) => pre + curr, 0);
};

console.log(largestSumAfterKNegations([4,2,3], 1));
console.log(largestSumAfterKNegations([3,-1,0,2], 3));
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2));