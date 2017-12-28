/**
 * Problem: https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/
 */

const dominantIndex = nums => {
  let max = max2times = Number.MIN_SAFE_INTEGER, maxIndex;
  nums.forEach((num, index) => {
    if (num > max) {
      max2times = 2 * max;
      max = num;
      maxIndex = index;
    } else {
      max2times = Math.max(num * 2, max2times);
    }
  });

  return max >= max2times ? maxIndex : -1;
};

module.exports = dominantIndex;
