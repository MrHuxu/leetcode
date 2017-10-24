/**
 * Problem: https://leetcode.com/problems/divide-two-integers/description/
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (!divisor)
    return null;
  var sym = dividend * divisor < 0 ? -1 : 1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  var tmp, result = 0;
  while (dividend >= divisor) {
    tmp = 1;
    while (divisor * tmp <= dividend)
      tmp *= 2;
    dividend = dividend - divisor * parseInt(tmp / 2);
    result += parseInt(tmp / 2);
  }
  if (-1 === sym) {
    return sym * (result <= 2147483648 ? result : 2147483648);
  } else {
    return result <= 2147483647 ? result : 2147483647;
  }
};

module.exports = divide;
