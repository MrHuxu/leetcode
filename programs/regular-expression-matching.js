/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let result = false;

  const traverse = (i, j) => {
    if (i === s.length && j === p.length) {
      result = true;
      return;
    }

    if (result || i === s.length || j === p.length) return;

    if (s[i] === p[j] || '.' === p[j]) {
      traverse(i + 1, j + 1);
    } else if ('*' === p[j]) {
      traverse(i + 1, j);
      if (s[i] === p[j + 1]) traverse(i, j + 1);
      if (s[i + 1] === p[j + 1]) traverse(i + 1, j + 1);
    } else if (s[i] !== p[j]) {
      traverse(i, j + 1);
    }
  };
  traverse(0, 0);

  return result;
};

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'aa'));
console.log(isMatch('aaa', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('aa', '.*'));
console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'c*a*b'));
console.log(isMatch('abcd', 'd*'));