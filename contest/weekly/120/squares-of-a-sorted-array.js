/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortedSquares = function(A) {
  return A.map(i => i * i).sort((a, b) => a > b ? 1 : -1);
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));