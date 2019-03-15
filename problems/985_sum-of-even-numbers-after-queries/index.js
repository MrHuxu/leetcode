/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
let sumEvenAfterQueries = function(A, queries) {
  let sum = A.reduce((pre, curr) => pre + (0 === curr % 2 ? curr : 0), 0);

  const result = [];
  for (let q of queries) {
    const [ val, idx ] = q;
    
    if (0 === (A[idx] + val) % 2) {
      if (0 === A[idx] % 2) {
        sum += val;
      } else {
        sum += A[idx] + val;
      }
    } else {
      if (0 === A[idx] % 2) {
        sum -= A[idx];
      }
    }

    result.push(sum);
    A[idx] += val;
  }

  return result;
};

module.exports = sumEvenAfterQueries;