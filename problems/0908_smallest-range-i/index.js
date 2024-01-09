/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let smallestRangeI = function(A, K) {
  const max = Math.max(...A);
  const min = Math.min(...A);

  if ((max - min) > K * 2) {
    return (max - min) - K * 2;
  } else return 0;
};

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1,3,6], 3));