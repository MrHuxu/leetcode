/**
 * @param {string} S
 * @return {string}
 */
let removeOuterParentheses = function(S) {
  let result = '';
  let cnt = 0, str = '';
  for (let i = 0; i < S.length; i++) {
    str += S[i];
    cnt += '(' === S[i] ? 1 : -1;
    if (!cnt) {
      result += str.slice(1, str.length - 1);
      str = '';
    }
  }
  return result;
};

console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())(())(()(()))'));
console.log(removeOuterParentheses('()()'));