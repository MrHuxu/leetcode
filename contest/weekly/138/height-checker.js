const { expect } = require('chai');

/**
 * @param {number[]} heights
 * @return {number}
 */
let heightChecker = function(heights) {
  const anotherHeights = heights.slice(0);
  anotherHeights.sort((a, b) => a > b ? 1 : -1);
  
  let cnt = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== anotherHeights[i]) cnt++;
  }
  return cnt;
};

it('height-checker', () => {
  expect(heightChecker([1,1,4,2,1,3])).to.eq(3);
  expect(heightChecker([1,1,1,1,1,1,1,1])).to.eq(0);
});