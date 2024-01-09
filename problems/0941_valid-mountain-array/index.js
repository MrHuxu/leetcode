/**
 * @param {number[]} A
 * @return {boolean}
 */
let validMountainArray = function(A) {
  if (A.length < 3) return false;

  let status;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      if (status === undefined) status = true;
      else if (status) continue;
      else return false;
    } else if (A[i] > A[i + 1]) {
      if (status === undefined) return false;
      if (!status) continue;
      if (status) status = false;
    } else return false;
  }

  return (!status) && true;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]));