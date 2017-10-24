/**
 * Problem: https://leetcode.com/problems/longest-absolute-file-path/description/
 */
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  var lens = [], result = 0, level = 0, tmpLen = 0, file = false;

  for (var i = 0; i <= input.length; ++i) {
    if ('\n' === input[i] || input[i] === undefined) {
      if (lens[level - 1]) tmpLen += lens[level - 1][lens[level - 1].length - 1] + 1;
      lens[level] ? lens[level].push(tmpLen) : lens[level] = [tmpLen];

      if (file) result = Math.max(result, tmpLen);
      level = tmpLen = 0;
      file = false;
    } else if ('\t' === input[i]) {
      ++level;
    } else {
      if (!file) file = '.' === input[i];
      ++tmpLen;
    }
  }

  return result;
};
module.exports = lengthLongestPath;
