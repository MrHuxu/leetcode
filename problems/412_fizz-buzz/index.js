/**
 * Problem: https://leetcode.com/problems/fizz-buzz/description/
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [];
  for (var i = 1; i <= n; ++i) {
    if (0 === i % 3 && 0 === i % 5) {
      result.push('FizzBuzz');
    } else if (0 === i % 3) {
      result.push('Fizz');
    } else if (0 === i % 5) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
};
module.exports = fizzBuzz;
