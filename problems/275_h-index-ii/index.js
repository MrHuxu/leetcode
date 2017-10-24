/**
 * Problem: https://leetcode.com/problems/h-index-ii/description/
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  var result = 0, len = citations.length;
  for (var i = 0; i < len; ++i) {
    if (citations[i] >= len - i) {
      result = len - i;
      break;
    }
  }
  return result;
};

module.exports = hIndex;
