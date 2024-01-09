const { expect } = require('chai');

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
let corpFlightBookings = function(bookings, n) {
  const result = [];
  for (let i = 0; i <= n; i++) result[i] = 0;

  for (let booking of bookings) {
    result[booking[0] - 1] += booking[2];
    result[booking[1]] -= booking[2];
  }

  for (let i = 1; i < n; i++) {
    result[i] += result[i - 1];
  }
  return result.slice(0, n);
};

it('corporate-flight-bookings', () => {
  expect(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5)).to.deep.eq([10, 55, 45, 25, 25]);
});