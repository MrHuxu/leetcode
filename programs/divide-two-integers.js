var dividend = 27, divisor = -2;

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
  if (sym === -1) {
    return sym * (result <= 2147483648 ? result : 2147483648);
  } else {
    return result <= 2147483647 ? result : 2147483647;
  }
};

console.log(divide(dividend, divisor));
