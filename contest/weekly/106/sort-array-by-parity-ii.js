/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParityII = function(A) {
  for (let i = 0, j = 1; i < A.length - 1 && j < A.length;) {
    if (A[i] === undefined || 0 === A[i] % 2) {
      i += 2;
    }

    if (A[j] === undefined || 1 === A[j] % 2) {
      j += 2;
    }

    if (A[i] !== undefined && A[j] !== undefined && A[i] % 2 !== 0 && A[j] % 2 !== 1) {
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
  }

  return A;
};