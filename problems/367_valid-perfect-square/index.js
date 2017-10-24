/**
 * Problem: https://leetcode.com/problems/valid-perfect-square/description/
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var flag = false, head = 1, tail = num;
  while (head < tail) {
    var mid = parseInt((head + tail) / 2);
    if (mid * mid < num) {
      head = mid + 1;
    } else if (mid * mid > num) {
      tail = mid - 1;
    } else {
      flag = true;
      break;
    }
  }
  return flag || head * head === num;
};
module.exports = isPerfectSquare;
