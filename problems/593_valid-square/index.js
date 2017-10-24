/**
 * Problem: https://leetcode.com/problems/valid-square/description/
 */
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  return (
    Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) === Math.pow(p3[0] - p4[0], 2) + Math.pow(p3[1] - p4[1], 2) &&
    Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2) === Math.pow(p2[0] - p4[0], 2) + Math.pow(p2[1] - p4[1], 2) &&
    Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2) === Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2) && (
      Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) === Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2) ||
      Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2) === Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2) ||
      Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2) === Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
    ) &&
    !!(Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2))
  );
};
module.exports = validSquare;
