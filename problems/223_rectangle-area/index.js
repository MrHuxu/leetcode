/**
 * Problem: https://leetcode.com/problems/rectangle-area/description/
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var width, height;
  
  if (E <= A) {
    if (G <= A)
      width = 0;
    else {
      width = G <= C ? G - A : C - A;
    }
  } else {
    if (E >= C)
      width = 0;
    else {
      width = G >= C ? C - E : G - E;
    }
  }
  
  if (F <= B) {
    if (H <= B)
      height = 0;
    else {
      height = H <= D ? H - B : D - B;
    }
  } else {
    if (F >= D)
      height = 0;
    else {
      height = H >= D ? D - F : H - F;
    }
  }
  
  var area = Math.abs(C - A) * Math.abs(D - B) + Math.abs(G - E) * Math.abs(H - F);
  return area - width * height;
};
module.exports = computeArea;
