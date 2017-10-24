/**
 * Problem: https://leetcode.com/problems/fraction-addition-and-subtraction/description/
 */
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const calc = (f1, f2, sym) => [
    '+' === sym ? (f1[0] * f2[1] + f1[1] * f2[0]) : (f1[0] * f2[1] - f1[1] * f2[0]),
    f1[1] * f2[1]
  ];

  let tmp;
  const format = ([a, b]) => {
    let m = Math.abs(a), n = Math.abs(b);
    while (m % n !== 0) {
      tmp = m % n;
      m = n;
      n = tmp;
    }
    return `${a / n}/${b / n}`;
  };

  let symbol = '+', curr = 0, num1 = [0, 1], num2 = [null, null];
  for (let i = 0; i < expression.length; ++i) {
    if ('+' === expression[i] || '-' === expression[i]) {
      if (curr) {
        num2[1] = curr;
        curr = 0;
        num1 = calc(num1, num2, symbol);
        num2 = [null, null];
      }
      symbol = expression[i];
    } else if ('/' === expression[i]) {
      num2[0] = curr;
      curr = 0;
    } else {
      curr = curr * 10 + parseInt(expression[i]);
    }
  }
  num2[1] = curr;

  return format(calc(num1, num2, symbol));
};

module.exports = fractionAddition;
