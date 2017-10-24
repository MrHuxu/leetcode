/**
 * Problem: https://leetcode.com/problems/container-with-most-water/description/
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var left = 0, right = height.length - 1, max = 0, tmp, area;
  while (left < right) {
    tmp = height[left] > height[right] ? height[right] : height[left];
    area = tmp * (right - left);
    if (height[left] < height[right]) {
      area = height[left] * (right - left);
      max = area > max ? area : max;
      left++;
    } else {
      area = height[right] * (right - left);
      max = area > max ? area : max;
      right--;
    }
  }
  return max;
};

module.exports = maxArea;
