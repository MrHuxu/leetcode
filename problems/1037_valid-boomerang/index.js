const { expect } = require('chai');

/**
 * @param {number[][]} points
 * @return {boolean}
 */
let isBoomerang = function(points) {
  const [a, b, c] = points;

  if (
    (a[0] === b[0] && a[1] === b[1]) ||
    (a[0] === c[0] && a[1] === c[1]) ||
    (b[0] === c[0] && b[1] === c[1])
  ) return false;

  if (0 === a[0] - b[0] || 0 === a[0] - c[0] || 0 === b[0] - c[0]) {
    return !(a[0] === b[0] && a[0] === c[0]);
  } else {
    return !((b[1] - a[1]) * (c[0] - b[0]) === (b[0] - a[0]) * (c[1] - b[1]));
  }
};

it ('valid-boomerang', () => {
  expect(isBoomerang([[1,1],[2,3],[3,2]])).to.eq(true);
  expect(isBoomerang([[1,1],[2,2],[3,3]])).to.eq(false);
  expect(isBoomerang([[0,1],[0,2],[0,3]])).to.eq(false);
  expect(isBoomerang([[0,0],[1,1],[1,1]])).to.eq(false);
});