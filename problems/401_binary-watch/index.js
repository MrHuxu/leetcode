/**
 * Problem: https://leetcode.com/problems/binary-watch/description/
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  var result = [];

  var dfs = function (num, done, left) {
    if (10 === done) {
      if (!left) {
        var hour = (num & 960) >> 6;
        var min = num & 63;

        if (hour < 12 && min < 60) result.push(hour + ':' + (min > 9 ? '' : '0') + min);
      }
      return;
    }
    var tmp = num << 1;
    dfs(tmp, done + 1, left);
    if (left) {
      dfs(tmp | 1, done + 1, left - 1);
    }
  };
  dfs(0, 0, num);

  return result;
};
module.exports = readBinaryWatch;
