/**
 * Problem: https://leetcode.com/problems/count-binary-substrings/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let preCount = 0, currSym = null, currCount = 0, result = 0;
  for (let i = 0; i < s.length; i++) {
    const sym = s[i];
    if (sym === currSym) {
      currCount++;
    } else {
      preCount = currCount;
      currSym = sym;
      currCount = 1;
    }
    if (currCount <= preCount) result++;
  }
  return result;
};

module.exports = countBinarySubstrings;
