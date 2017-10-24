/**
 * Problem: https://leetcode.com/problems/basic-calculator/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (!s.length) return 0;
  var nums = [], operators = [];
  var i, tmp, len = s.length;
  
  var calc = function (operator, nums) {
    switch (operator) {
    case '+':
      return nums[1] + nums[2];
    case '-':
      return nums[1] - nums[2];
    }
  };
  
  for (i = 0; i < len; ++i) {
    if ('(' === s[i]) {
      nums.push(s[i]);
    } else if (s[i] >= '0' && s[i] <= '9') {
      tmp = '';
      for (; s[i] >= '0' && s[i] <= '9'; ++i) tmp = tmp + s[i];
      if (nums[nums.length - 1] === undefined || '(' === nums[nums.length - 1])
        nums.push(parseInt(tmp));
      else
        nums.push(calc(operators.pop(), { 1: nums.pop(), 2: parseInt(tmp) }));
      --i;
    } else if ('+' === s[i] || '-' === s[i]) {
      operators.push(s[i]);
    } else if (')' === s[i]) {
      if ('(' === nums[nums.length - 2]) {
        tmp = nums.pop();
        nums.pop();
        nums.push(tmp);
      }
      if (nums.length >= 2 && nums[nums.length - 1] !== '(') nums.push(calc(operators.pop(), { 2: nums.pop(), 1: nums.pop() }));
    }
  }
  
  while (nums.length > 1) {
    nums.unshift(calc(operators.shift(), { 1: nums.shift(), 2: nums.shift() }));
  }
  
  return nums[0];
};
module.exports = calculate;
