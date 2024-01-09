const { expect } = require('chai');

/**
 * @param {string} date
 * @return {number}
 */
let dayOfYear = function(date) {
  const isLeap = year => (0 === year % 100) ? (0 === year % 400) : (0 === year % 4);

  const has31 = {
    1  : true,
    3  : true,
    5  : true,
    7  : true,
    8  : true,
    10 : true,
    12 : true,
  };

  const arr = date.split('-');
  const year = parseInt(arr[0]);
  const month = parseInt(arr[1]);
  const day = parseInt(arr[2]);

  let result = 0;
  for (let i = 1; i < month; i++) {
    if (2 === i) {
      result += isLeap(year) ? 29 : 28;
    } else {
      result += has31[i] ? 31 : 30;
    }
  }
  result += day;
  return result;
};

it('ordinal-number-of-date', () => {
  expect(dayOfYear('2019-01-09')).to.eq(9);
  expect(dayOfYear('2004-03-01')).to.eq(61);
});