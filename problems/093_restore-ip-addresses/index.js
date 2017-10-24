/**
 * Problem: https://leetcode.com/problems/restore-ip-addresses/description/
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return [];
  var result = [], tmp;
  var valid = function (str) {
    var num = parseInt(str, 10);
    return num >= 0 && num <= 255;
  };

  var dfs = function (pos, str, len) {
    if (s[pos] === undefined && 4 === len) {
      result.push(str);
      return;
    } else {
      tmp = s[pos];
      if (valid(tmp)) {
        dfs(pos + 1, str + (len ? '.' : '') + tmp, len + 1);
      }

      if (s[pos] !== '0' && s[pos + 1]) {
        tmp = s[pos] + s[pos + 1];
        if (valid(tmp)) {
          dfs(pos + 2, str + (len ? '.' : '') + tmp, len + 1);
        }

        if (s[pos + 2]) {
          tmp = s[pos] + s[pos + 1] + s[pos + 2];
          if (valid(tmp)) {
            dfs(pos + 3, str + (len ? '.' : '') + tmp, len + 1);
          }
        }
      }
    }
  };
  dfs(0, '', 0);

  return result;
};

module.exports = restoreIpAddresses;
