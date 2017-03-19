/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var max = 0, curr = 0;

  nums.forEach(function (num) {
    if (1 === num) {
      curr += 1;
      max = Math.max(max, curr);
    } else {
      curr = 0;
    }
  });

  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));