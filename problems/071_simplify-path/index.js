/**
 * Problem: https://leetcode.com/problems/simplify-path/description/
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  var pre = '/' === path[0] ? '/' : '';
  var pathArr = path.split('/');
  var result = [];
  for (var i = 0, l = pathArr.length; i < l; ++i) {
    if (pathArr[i].length !== 0 && pathArr[i] !== '.') {
      if ('..' === pathArr[i])
        result.pop();
      else
        result.push(pathArr[i]);
    }
  }
  return pre + result.join('/');
};

module.exports = simplifyPath;
