const { expect } = require('chai');

/**
 * @param {number[][]} points
 * @return {number}
 */
let minTimeToVisitAllPoints = function(points) {
  const min = (p1, p2) => {
    sub1 = Math.abs(p2[0] - p1[0]);
    sub2 = Math.abs(p2[1] - p1[1]);

    return Math.max(sub1, sub2);
  };

  let result = 0;
  for (let i = 0; i < points.length - 1; i++) result += min(points[i], points[i + 1]);
  return result;
};

it('minimum-time-visiting-all-points', () => {
  expect(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])).to.eq(7);
  expect(minTimeToVisitAllPoints([[3, 2], [-2, 2]])).to.eq(5);
});