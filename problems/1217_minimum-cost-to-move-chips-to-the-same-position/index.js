const { expect } = require('chai');

/**
 * @param {number[]} chips
 * @return {number}
 */
let minCostToMoveChips = function(chips) {
  const cnt = { 0: 0, 1: 0 };
  for (let chip of chips) cnt[chip%2]++;

  return Math.min(cnt[0], cnt[1]);
};

it('play-with-chips', ()=> {
  expect(minCostToMoveChips([1, 2, 3])).to.eq(1);
  expect(minCostToMoveChips([2, 2, 2, 3, 3])).to.eq(2);
});