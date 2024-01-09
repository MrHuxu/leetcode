const { expect } = require('chai');

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
let allCellsDistOrder = function(R, C, r0, c0) {
  const nodes = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      nodes.push([i, j]);
    }
  }

  return nodes.sort((a, b) => {
    const subA = Math.abs(a[0] - r0) + Math.abs(a[1] - c0);
    const subB = Math.abs(b[0] - r0) + Math.abs(b[1] - c0);
    return subA > subB ? 1 : -1;
  });
};

it('matrix-cells-in-distance-order', () => {
  expect(allCellsDistOrder(1, 2, 0, 0)).to.deep.eq([[0,0],[0,1]]);
});