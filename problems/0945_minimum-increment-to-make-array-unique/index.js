/**
 * @param {number[]} A
 * @return {number}
 */
let minIncrementForUnique = function(A) {
  A.sort((a, b) => a > b ? 1 : -1);

  let result = 0;
  for (let i = 1; i < A.length; i++) {
    let j = 0;
    while (A[i] + j <= A[i - 1]) j++;
    A[i] += j;
    result += j;
  }

  return result;
};

console.log(minIncrementForUnique([1, 2, 2]));
console.log(minIncrementForUnique([3,2,1,2,1,7]));