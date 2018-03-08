/**
 * Problem: https://leetcode.com/problems/container-with-most-water/description/
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0, right = height.length - 1, max = 0, tmp, area;
  while (left < right) {
    tmp = Math.min(height[left], height[right]);
    area = tmp * (right - left);
    if (height[left] < height[right]) {
      area = height[left] * (right - left);
      max = Math.max(max, area);
      left++;
    } else {
      area = height[right] * (right - left);
      max = Math.max(max, area);
      right--;
    }
  }
  return max;
};

module.exports = maxArea;
