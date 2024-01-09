const { expect } = require('chai');

/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
let dietPlanPerformance = function(calories, k, lower, upper) {
  let points = 0;
  let tmp = 0;
  for (let i = 0; i < calories.length; i++) {
    tmp += calories[i];
    
    if (i === k - 1) {
      if (tmp < lower) points--;
      if (tmp > upper) points++;
    } else if (i >= k) {
      tmp -= calories[i - k];
      if (tmp < lower) points--;
      if (tmp > upper) points++;
    };
  }
  return points;
};

it('diet-plan-performanc', () => {
  expect(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3)).to.eq(0);
  expect(dietPlanPerformance([3, 2], 2, 0, 1)).to.eq(1);
  expect(dietPlanPerformance([6,5,0,0], 2, 1, 5)).to.eq(0);
  expect(dietPlanPerformance([6,13,8,7,10,1,12,11], 6, 5, 37)).to.eq(3);
});