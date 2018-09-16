/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
let atMostNGivenDigitSet = function(D, N) {
  const lenN = N.toString().length;
  const m = N.toString().length - 1;

  let res = 0;
  for (let i = 1; i <= m; i++) {
    res += Math.pow(D.length, m);
  }


};