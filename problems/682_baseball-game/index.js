/**
 * Problem: https://leetcode.com/problems/baseball-game/description/
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];
  for (let op of ops) {
    switch (op) {
    case 'C':
      stack.pop();
      break;

    case 'D':
      stack.push(stack[stack.length - 1] * 2);
      break;

    case '+':
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
      break;

    default:
      stack.push(parseInt(op));
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
};
module.exports = calPoints;
