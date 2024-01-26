/**
 * @param {number[]} A
 * @return {number}
 */
let maxTurbulenceSize = function(A) {
  if (1 === A.length || 2 === A.length) return A.length;

  let max = 2, curr = 2;

  for (let i = 2; i < A.length; i++) {
    if (A[i] > A[i - 1] && A[i - 1] < A[i - 2]) curr++;
    else if (A[i] < A[i - 1] && A[i - 1] > A[i - 2]) curr++;
    else curr = 2;
    max = Math.max(max, curr);
  }

  return max;
};

console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]));
console.log(maxTurbulenceSize([4, 8, 12, 16]));
console.log(maxTurbulenceSize([100]));