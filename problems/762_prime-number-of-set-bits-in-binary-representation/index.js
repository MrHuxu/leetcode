/**
 * Problem: https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/
 */

const primeNumberOfSetBitsInBinaryRepresentation = (L, R) => {
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23]);

  let res = 0;
  for (let i = L; i <= R; i++) {
    let num = i, setBit = 0;
    while (num > 0) {
      if (num & 1) setBit++;
      num = num >> 1;
    }
    res += primes.has(setBit) ? 1 : 0;
  }
  return res;
};

module.exports = primeNumberOfSetBitsInBinaryRepresentation;
