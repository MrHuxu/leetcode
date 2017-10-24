/**
 * Problem: https://leetcode.com/problems/word-break/description/
 */
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var dp = [];

  for (var i = 0, l = s.length; i < l; ++i) {
    var tmp = '';
    for (var j = i; j >= 0; --j) {
      tmp = s[j] + tmp;
      if (j > 0) {
        dp[i] = wordDict.has(tmp) && dp[j - 1];
        if (dp[i]) break;
      } else if (0 === j) {
        dp[i] = wordDict.has(tmp);
      }
    }
  }

  return dp[s.length - 1];
};

module.exports = wordBreak;
