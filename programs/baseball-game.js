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

console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));