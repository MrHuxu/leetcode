/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var result = [], finalResult = [];
  var search = function (str, n, left, sum) {
    if (left === n) {
      while (sum--) str = str + ')';
      if (str.length === n * 2)
        result.push(str);
      return;
    }
    for (var j = left; j < n; ++j) {
      search(str + '(', n, j + 1, sum + 1);
    }
    for (var j = sum; j > 0; --j) {
      search(str + ')', n, left, j - 1);
    }
  };
  search('', n, 0, 0);
  return result;
};
