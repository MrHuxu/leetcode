/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
let addToArrayForm = function(A, K) {
  const B = [], result = [];
  while (K > 0) {
    B.unshift(K % 10);
    K = parseInt(K / 10);
  }

  let plus = 0, maxLen = Math.max(A.length, B.length);
  for (let i = 0; i <= maxLen - 1; i++) {
    const posA = A.length - 1 - i; 
    const posB = B.length - 1 - i;

    const sum = (A[posA] === undefined ? 0: A[posA]) + (B[posB] === undefined ? 0 : B[posB]) + plus;
    result.unshift(sum % 10);
    plus = sum >= 10 ? 1 : 0;
  }
  if (plus) result.unshift(1);

  return result;
};

module.exports = addToArrayForm;