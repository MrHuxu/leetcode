/**
 * Problem: https://leetcode.com/problems/gray-code/description/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  var res = [0];

  for (var i = 0; i < n; i++) {
    for (var j = res.length - 1; j >= 0; j--) {
      res.push(res[j] + (1 << i));
    }
  }

  return(res);
};

module.exports = grayCode;
