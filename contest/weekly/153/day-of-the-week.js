const { expect } = require('chai');

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
let dayOfTheWeek = function(day, month, year) {
  const isLeap = num => num % 100 ? !(num % 4) : !(num % 400);

  const monthDays = [undefined, 31, undefined, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let sum = 0;
  for (let i = 1; i < year; i++) sum += isLeap(i) ? 366 : 365;
  for (let i = 1; i < month; i++) sum += monthDays[i] ? monthDays[i] : (isLeap(year) ? 29 : 28);
  sum += day;

  
  return dayNames[sum % 7];
};

it('day-of-the-week', () => {
  expect(dayOfTheWeek(31, 8, 2019)).to.eq('Saturday');
  expect(dayOfTheWeek(18, 7, 1999)).to.eq('Sunday');
});