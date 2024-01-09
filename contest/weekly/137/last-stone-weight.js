const { expect } = require('chai');

/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = function(stones) {
  if (0 === stones.length) return 0;
  if (1 === stones.length) return stones[0];
  
  let max1, max2;
  for (let i = 0; i < 2; i++) {
    for (let i = parseInt(stones.length / 2); i >= 1; i--) {
      let mid = stones[i - 1];
      const left = stones[i * 2 - 1];

      if (left > mid) {
        let tmp = mid;
        stones[i - 1] = left;
        stones[i * 2 - 1] = tmp;
      }

      if (stones[i * 2] !== undefined && stones[i * 2] > stones[i - 1]) {
        let tmp = stones[i * 2];
        stones[i * 2] = stones[i - 1];
        stones[i - 1] = tmp;
      }
    }

    if (0 === i) max1 = stones.shift();
    else max2 = stones.shift();
  }

  if (max1 === max2) return lastStoneWeight(stones);
  else return lastStoneWeight([...stones, Math.abs(max1 - max2)]);
};

it('last-stone-weight', () => {
  expect(lastStoneWeight([1, 2])).to.eq(1);
  expect(lastStoneWeight([1, 1])).to.eq(0);
  expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).to.eq(1);
});