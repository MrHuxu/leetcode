const { expect } = require('chai');

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
let checkStraightLine = function(coordinates) {
  for (let i = 1; i < coordinates.length - 1; i++) {
    const curr = coordinates[i];
    const prev = coordinates[i - 1];
    const next = coordinates[i + 1];

    if ((curr[1] - prev[1]) * (next[0] - curr[0]) != (curr[0] - prev[0]) * (next[1] - curr[1])) {
      return false;
    }
  }

  return true;
};

it('check-if-it-is-a-straight-line', () => {
  expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])).to.eq(false);
});