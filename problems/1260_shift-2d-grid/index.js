const { expect } = require('chai');

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
  if (0 === k || 0 === grid.length || k === grid.length * grid[0].length) {
    return grid;
  }
  
  let arr = [];
  let seq = 0;
  for (let row of grid) {
    for (let col of row) {
      arr[seq] = col;
      seq++;
    }
  }

  k = k % (grid.length * grid[0].length);
  arr = [...arr.slice(arr.length - k, arr.length), ...arr.slice(0, arr.length - k)];

  seq = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = arr[seq];
      seq++;
    }
  }

  return grid;
};

it('shift-2d-grid', () => {
  expect(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)).to.deep.eq([[9,1,2],[3,4,5],[6,7,8]]);
  expect(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)).to.deep.eq([[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]);
});