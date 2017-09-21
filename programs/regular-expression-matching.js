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

console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'aa')); // true
console.log(isMatch('aaa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('aa', '.*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('abcd', 'd*')); // false
console.log(isMatch('ab', '.*c')); // false
console.log(isMatch('ab', '.*c')); // false
console.log(isMatch('a', 'ab*')); // true
console.log(isMatch('', '..*')); // false
console.log(isMatch('bbbba', '.*a*a')); // true
console.log(isMatch('aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*c')); // false
console.log(isMatch('a', ''));