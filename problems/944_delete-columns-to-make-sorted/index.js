/**
 * @param {string[]} A
 * @return {number}
 */
let minDeletionSize = function(A) {
  let result = 0;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i].charCodeAt() > A[j + 1][i].charCodeAt()) {
        result++;
        break;
      }
    }
  }

  return result;
};

console.log(minDeletionSize(['cba', 'daf', 'ghi']));
console.log(minDeletionSize(['b', 'b']));
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));