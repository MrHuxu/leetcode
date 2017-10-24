/**
 * Problem: https://leetcode.com/problems/integer-to-roman/description/
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var result = '', i;
  var numToLetter = {
    1    : 'I',
    5    : 'V',
    10   : 'X',
    50   : 'L',
    100  : 'C',
    500  : 'D',
    1000 : 'M'
  };

  while (num) {
    if (num / 1000 >= 1) {
      var times = parseInt(num / 1000);
      for (i = 0; i < times; ++i) result += 'M';
      num = num % 1000;
    } else if (num / 100 >= 1) {
      var times = parseInt(num / 100);
      if (9 === times) {
        result += 'CM';
      } else if (times < 4) {
        for (i = 0; i < times; ++i) result += 'C';
      } else {
        for (i = 0; i < 5 - times; ++i) result += 'C';
        result += 'D';
        for (i = 0; i < times - 5; ++i) result += 'C';
      }
      num = num % 100;
    } else if (num / 10 >= 1) {
      var times = parseInt(num / 10);
      if (9 === times) {
        result += 'XC';
      } else if (times < 4) {
        for (i = 0; i < times; ++i) result += 'X';
      } else {
        for (i = 0; i < 5 - times; ++i) result += 'X';
        result += 'L';
        for (i = 0; i < times - 5; ++i) result += 'X';
      }
      num = num % 10;
    } else {
      if (9 === num) {
        result += 'IX';
      } else if (num < 4) {
        for (i = 0; i < num; ++i) result += 'I';
      } else {
        for (i = 0; i < 5 - num; ++i) result += 'I';
        result += 'V';
        for (i = 0; i < num - 5; ++i) result += 'I';
      }
      num = num % 1;
    }
  }

  return result;
};
module.exports = intToRoman;
