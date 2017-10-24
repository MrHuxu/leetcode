/**
 * Problem: https://leetcode.com/problems/repeated-dna-sequences/description/
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  var map = {}, result = [];
  var len = s.length;

  for (var i = 9; i < len; ++i) {
    var subStr = s.slice(i - 9, i + 1);
    if (1 === map[subStr]) {
      result.push(subStr);
    } else if (map[subStr] === undefined) {
      map[subStr] = 0;
    }
    ++map[subStr];
  }

  return result;
};
module.exports = findRepeatedDnaSequences;
