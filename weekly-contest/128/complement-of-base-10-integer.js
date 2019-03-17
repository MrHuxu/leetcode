/**
 * @param {number} N
 * @return {number}
 */
let bitwiseComplement = function(N) {
  let i = 1;
  while (i < N) i = (i << 1) + 1;
  return i ^ N;
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));