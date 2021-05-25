const { expect } = require('chai');

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = nums => nums.reduce((pre, curr) => checkNum(curr) ? pre + 1 : pre, 0);

const checkNum = num => {
  let base = 1, result = 1;
  while (true) {
    let tmp = num / base;
    if (tmp >= 1 && tmp < 10) break;

    result++;
    base *= 10;
  }

  return 0 === result % 2;
};

it('find-numbers-with-even-number-of-digits', () => {
  expect(findNumbers([12,345,2,6,7896])).to.eq(2);
  expect(findNumbers([555,901,482,1771])).to.eq(1);
});