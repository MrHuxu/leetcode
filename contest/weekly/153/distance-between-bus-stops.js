const { expect } = require('chai');

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
let distanceBetweenBusStops = function(distance, start, destination) {
  if (destination < start) {
    let tmp = start;
    start = destination;
    destination = tmp;
  }

  let len = 0, sum = 0;
  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      len += distance[i];
    }
    sum += distance[i];
  }

  return Math.min(len, sum - len);
};

it('distance-between-bus-stops', () => {
  expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)).to.eq(1);
  expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)).to.eq(3);
});