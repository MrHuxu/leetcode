/**
 * @param {number} N
 * @return {string}
 */
let baseNeg2 = function(N) {
  if (0 === N) return '0';
  
  let result = '';
  while (N !== 1) {
    if (0 === N % 2) {
      N /= -2;
      result = '0' + result;
    } else {
      N = (N - 1) / (-2);
      result = '1' + result;
    }
  }

  return '1' + result;
};

console.log(baseNeg2(1));
console.log(baseNeg2(2));
console.log(baseNeg2(3));
console.log(baseNeg2(4));
console.log(baseNeg2(5));
console.log(baseNeg2(7));
console.log(baseNeg2(10));