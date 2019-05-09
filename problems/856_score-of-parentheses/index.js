/**
 * @param {string} S
 * @return {number}
 */
let scoreOfParentheses = function(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if ('(' === S[i]) {
      stack.push(S[i]);
    } else {
      let tmp = 0;
      for (let j = stack.length - 1; j >= 0; j--) {
        if ('(' === stack[j]) {
          stack.pop();
          break;
        } else {
          tmp += stack.pop();
        }
      }

      stack.push(tmp ? tmp * 2 : 1);
    }
  }
 
  return stack.reduce((pre, curr) => pre + curr, 0);
};

module.exports = scoreOfParentheses;