/**
 * Problem: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var stack = [];

  var calc = function (operator) {
    var num2 = stack.pop();
    var num1 = stack.pop();
    switch (tokens[i]) {
    case '+':
      stack.push(parseInt(num1 + num2));
      break;

    case '-':
      stack.push(parseInt(num1 - num2));
      break;

    case '*':
      stack.push(parseInt(num1 * num2));
      break;

    case '/':
      stack.push(parseInt(num1 / num2));
      break;
    }
  };

  for (var i = 0, l = tokens.length; i < l; ++i) {
    if (1 === tokens[i].length && tokens[i].charCodeAt() >= 42 && tokens[i].charCodeAt() <= 47) {
      calc(tokens[i]);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }

  return stack.pop();
};
module.exports = evalRPN;
