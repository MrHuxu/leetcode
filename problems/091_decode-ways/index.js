/**
 * Problem: https://leetcode.com/problems/decode-ways/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s.length) return 0;
  var dp = [1], flag = true;

  var decodable = function (str) {
    if ('0' === str[0]) return false;
    var num = parseInt(str, 10);
    return num >= 1 && num <= 26;
  };

  for (var i = 1, l = s.length; i <= l; ++i) {
    dp[i] = 0;
    if (decodable(s[i - 1]))
      dp[i] += dp[i - 1];
    if (i >= 2 && decodable(s[i - 2] + s[i - 1]))
      dp[i] += dp[i - 2];
  }

  return dp[s.length];
};
module.exports = numDecodings;
