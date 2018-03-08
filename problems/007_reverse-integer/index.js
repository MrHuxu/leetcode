/**
 * Problem: https://leetcode.com/problems/reverse-integer/description/
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const sym = x < 0 ? -1 : 1;
  const stack = [];

  x = Math.abs(x);
  while(x != 0) {
    stack.push(x % 10);
    x = parseInt(x / 10);
  }
  while(stack.length && !stack[0]) stack.shift();

  let result = 0;
  while(stack.length) {
    let num = stack.shift();
    result = result * 10 + num;
  }

  if (x > 2147483647 || result > 2147483647 || x < -2147483648 || result < -2147483648) return 0;
  return result * sym;
};

module.exports = reverse;
