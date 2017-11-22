/**
 * Problem: https://leetcode.com/problems/self-dividing-numbers/description/
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const judge = num => {
    let tmp = num;
    while (tmp > 0) {
      const div = tmp % 10;
      if (num % div !== 0) return false;
      tmp = parseInt(tmp / 10);
    }
    return true;
  };

  const result = [];
  for (let i = left; i <= right; i++) {
    if (judge(i)) result.push(i);
  }
  return result;
};

module.exports = selfDividingNumbers;
