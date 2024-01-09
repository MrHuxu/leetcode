/**
 * @param {number[][]} A
 * @return {number}
 */
let minFallingPathSum = function(A) {
  let result = Number.MAX_SAFE_INTEGER;
  const traverse = (depth, index, sum) => {
    if (depth === A.length) {
      result = Math.min(result, sum);
      return;
    }

    if (A[depth][index] != undefined) {
      traverse(depth + 1, index - 1, sum + A[depth][index]);
      traverse(depth + 1, index, sum + A[depth][index]);
      traverse(depth + 1, index + 1, sum + A[depth][index]);
    }
  };
  for (let i = 0; i < A[0].length; i++) traverse(0, i, 0);

  return result;
};

console.log(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]));
console.log(minFallingPathSum([[51,24],[-50,82]]));