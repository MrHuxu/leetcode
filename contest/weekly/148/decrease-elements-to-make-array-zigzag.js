const { expect } = require('chai');

/**
 * @param {number[]} nums
 * @return {number}
 */
let movesToMakeZigzag = function(nums) {
  let res1 = 0, res2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (0 === i) {
      if (nums[i] >= nums[1]) res2 += nums[i] - nums[1] + 1;
      continue;
    }

    if (i % 2) {
      if (i === nums.length - 1) {
        if (nums[i] >= nums[i - 1]) res1 += nums[i] - nums[i - 1] + 1;
        continue;
      } else {
        const min = Math.min(nums[i - 1], nums[i + 1]);
        if (nums[i] >= min) res1 += nums[i] - min + 1;
      }
    } else {
      if (i === nums.length - 1) {
        if (nums[i] >= nums[i - 1]) res2 += nums[i] - nums[i - 1] + 1;
        continue;
      }
      const min = Math.min(nums[i - 1], nums[i + 1]);
      if (nums[i] >= min) res2 += nums[i] - min + 1;
    }
  }
  return Math.min(res1, res2);
};

it('decrease-elements-to-make-array-zigzag', () => {
  expect(movesToMakeZigzag([1,2,3])).to.eq(2);
  expect(movesToMakeZigzag([9,6,1,6,2])).to.eq(4);
});