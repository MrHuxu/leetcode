/**
 * Problem: https://leetcode.com/problems/maximum-swap/description/
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const nums = num.toString().split('').map(Number);

  for (let i = 0; i < nums.length - 1; ++i) {
    const maxInLeft = Math.max.apply(null, nums.slice(i + 1));
    if (maxInLeft > nums[i]) {
      for (let j = nums.length - 1; j > i; --j) {
        if (nums[j] === maxInLeft) {
          nums[j] = nums[i];
          nums[i] = maxInLeft;
          return Number(nums.join(''));
        }
      }
    }
  }
  return num;
};
module.exports = maximumSwap;
