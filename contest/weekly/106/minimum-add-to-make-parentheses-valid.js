/**
 * @param {string} S
 * @return {number}
 */
let minAddToMakeValid = function(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    let ch = S[i];
    if ('(' === ch) stack.push(ch);
    if (')' === ch) {
      if (stack.length > 0 && '(' === stack[stack.length - 1]) stack.pop();
      else stack.push(ch);
    }
  }
  return stack.length;
};