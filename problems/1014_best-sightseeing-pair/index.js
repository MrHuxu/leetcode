/**
 * @param {number[]} A
 * @return {number}
 */
let maxScoreSightseeingPair = function(A) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      max = Math.max(max, A[i] + A[j] + i - j);
    }
  }

  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));