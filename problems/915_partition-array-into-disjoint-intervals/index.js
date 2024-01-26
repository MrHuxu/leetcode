/**
 * @param {number[]} A
 * @return {number}
 */
let partitionDisjoint = function(A) {
  const mins = [];
  for (let i = A.length - 1; i >= 0; i--) {
    if (mins[i + 1] === undefined) mins[i] = A[i];
    else mins[i] = Math.min(A[i], mins[i + 1]);
  }

  let max = A[0];
  for (let i = 0; i < A.length - 1; i++) {
    max = Math.max(A[i], max);
    if (mins[i + 1] >= max) return i + 1;
  }
};

console.log(partitionDisjoint([1, 1]));
console.log(partitionDisjoint([5,0,3,8,6]));
console.log(partitionDisjoint([1,1,1,0,6,12]));