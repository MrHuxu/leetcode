/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
let queryString = function(S, N) {
  for (let i = 1; i <= N; i++) {
    let str = '', j = i;
    while (j !== 0) {
      str = (0 === j % 2 ? '0' : '1') + str;
      j = j >> 1;
    }
    if (!S.includes(str)) return false;
  }

  return true;
};

console.log(queryString('0110', 3));
console.log(queryString('0110', 4));
console.log(queryString('10010111100001110010', 10));
console.log(queryString('111001000001001110111101100111001100101101001110110110111001',30));