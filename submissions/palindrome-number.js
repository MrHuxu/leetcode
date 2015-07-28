/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var str = x.toString();
  return str === str.split('').reverse().join('');
};
