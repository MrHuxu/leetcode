/**
 * Problem: https://leetcode.com/problems/regular-expression-matching/description/
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let patterns = [];

  for (let i = 0; i < p.length; ++i) {
    if ('*' === p[i]) {
      patterns[patterns.length - 1].unlimit = true;
    } else {
      patterns.push({ ch: p[i] });
    }
  }

  if (
    patterns.length &&
    ((!patterns[0].unlimit && patterns[0].ch !== s[0] && patterns[0].ch !== '.') ||
    (!patterns[patterns.length - 1].unlimit && patterns[patterns.length - 1].ch !== s[s.length - 1] && patterns[patterns.length - 1].ch !== '.'))
  ) {
    return false;
  }

  let result = false;
  const traverse = (i, j) => {
    if (i === s.length) {
      while (patterns[j] && patterns[j].unlimit) ++j;
      if (j === patterns.length) {
        result = true;
        return;
      }
    }

    if (result || j === patterns.length) return;

    if (s[i] && patterns[j] && (s[i] === patterns[j].ch || '.' === patterns[j].ch)) {
      traverse(i + 1, j + 1);
      if (patterns[j].unlimit) {
        traverse(i + 1, j);
        traverse(i, j + 1);
      }
    } else if (patterns[j].unlimit) {
      traverse(i, j + 1);
    }
  };
  traverse(0, 0);

  return result;
};
module.exports = isMatch;
