/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
let minDominoRotations = function(A, B) {
  let sameKeys = { [A[0]]: 1, [B[0]]: 1 };
  for (let i = 1; i < A.length; i++) {
    if (A[i] === B[i]) {
      if (sameKeys[A[i]] !== undefined) {
        sameKeys = { [A[i]]: 1 };
        continue;
      } else {
        return -1;
      }
    }

    if (sameKeys[A[i]] !== undefined) {
      if (sameKeys[B[i]] === undefined )
        sameKeys = { [A[i]]: 1 };
    } else {
      if (sameKeys[B[i]] === undefined)
        return -1;
      else 
        sameKeys = { [B[i]]: 1 };
    }
  }
  
  const changeTimes = [];
  for (let key of Object.keys(sameKeys)) {
    key = parseInt(key);

    let i, j = 0, k = 0;
    for (i = 0; i < A.length; i++) {
      if (A[i] !== key) j++;
      if (B[i] !== key) k++;
    }
    changeTimes.push(j, k);
  }

  return Math.min(...changeTimes);
};

console.log(minDominoRotations([2, 2], [5, 5]));
console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]));
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4]));