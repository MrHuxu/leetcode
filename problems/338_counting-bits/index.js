/**
 * Problem: https://leetcode.com/problems/counting-bits/description/
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var result = [0], pow;
  
  for (var i = 1; i <= num; ++i) {
    if (i & (i - 1)) {
      result.push(result[i - pow] + 1);
    } else {
      pow = i;
      result.push(1);
    }
  }
  
  return result;
};
module.exports = countBits;
