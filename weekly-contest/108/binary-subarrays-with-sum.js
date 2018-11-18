/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
let numSubarraysWithSum = function(A, S) {
  let front = 0, sum = 0, result = 0;
  for (i = 0; i < A.length; i++) {
    if (sum < S) sum += A[i];

    if (sum === S) {
    }
  }
};