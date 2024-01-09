const { expect } = require('chai');

/**
 * @param {number} n
 * @return {number}
 */
let tribonacci = function(n) {
  if (0 === n) return 0;
  if (1 === n || 2 === n) return 1;

  const arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
  }
  return arr[n];
};

it('n-th-tribonacci-number', () => {
  expect(tribonacci(3)).to.eq(2);
  expect(tribonacci(4)).to.eq(4);
  expect(tribonacci(25)).to.eq(1389537);
});