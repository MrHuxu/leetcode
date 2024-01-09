/**
 * @param {number[]} A
 * @return {boolean}
 */
let canThreePartsEqualSum = function(A) {
  let sum = A.reduce((pre, curr) => pre + curr, 0);
  if (sum % 3) return false;

  sum /= 3;
  let start = 0, parts = 0, i = 0;
  for (; i < A.length; i++) {
    if (start + A[i] !== sum) start += A[i];
    else {
      start = 0;
      parts++;

      if (3 === parts) break;
    }
  }

  return 3 === parts && 0 === A.slice(i + 1).reduce((pre, curr) => pre + curr, 0);
};

console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]));
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]));