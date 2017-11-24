/**
 * Problem: https://leetcode.com/problems/solve-the-equation/description/
 */
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  const left = { coefficient: 0, num: 0 }, right = { coefficient: 0, num: 0 };
  const [leftStr, rightStr] = equation.split('=');

  const process = (str, obj) => {
    str += '+';
    let positive = '-' !== str[0], num = '';
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if ('-' === ch || '+' === ch) {
        if (num.length) {
          if (positive) {
            obj.num += parseInt(num);
          } else {
            obj.num -= parseInt(num);
          }
        }
        positive = '+' === ch;
        num = '';
      } else if ('x' === ch) {
        if (positive) {
          obj.coefficient += num.length ? parseInt(num) : 1;
        } else {
          obj.coefficient -= num.length ? parseInt(num) : 1;
        }
        num = '';
      } else {
        num += ch;
      }
    }
  };
  process(leftStr, left);
  process(rightStr, right);

  const coefficient = left.coefficient - right.coefficient;
  const num = right.num - left.num;

  if (coefficient) {
    return `x=${num / coefficient}`;
  } else {
    if (num) {
      return 'No solution';
    } else {
      return 'Infinite solutions';
    }
  }
};

module.exports = solveEquation;
