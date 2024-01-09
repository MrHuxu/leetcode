/**
 * @param {string} S
 * @return {number[]}
 */
let diStringMatch = function(S) {
  const arr = [];
  for (let i = 0; i <= S.length; i++) arr.push(i);

  const result = [];
  for (let i = 0; i < S.length; i++) {
    if ('I' === S[i]) result.push(arr.shift());
    else if ('D' === S[i]) result.push(arr.pop());
  }
  result.push(arr.pop());
  
  return result;
};

console.log(diStringMatch('IDID'));
console.log(diStringMatch('III'));
console.log(diStringMatch('DDI'));