/**
 * Problem: https://leetcode.com/problems/basic-calculator-ii/description/
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
    case '*':
      return nums[1] * nums[2];
    case '/':
      return parseInt(nums[1] / nums[2]);
    }
  };
  
  for (i = 0; i < len; ++i) {
    if (s[i] >= '0' && s[i] <= '9') {
      tmp = '';
      for (; s[i] >= '0' && s[i] <= '9'; ++i) tmp = tmp + s[i];
      nums.push(parseInt(tmp));
      --i;
      
      if ('*' === operators[operators.length - 1] || '/' === operators[operators.length - 1])
        nums.push(calc(operators.pop(), { 2: nums.pop(), 1: nums.pop() }));
    } else if ('+' === s[i] || '-' === s[i] || '*' === s[i] || '/' === s[i]) {
      operators.push(s[i]);
    }
  }
  
  tmp = nums[0];
  for (i = 0, len = operators.length; i < len; ++i) {
    tmp = calc(operators[i], { 1: tmp, 2: nums[i + 1] });
  }
  
  return tmp;
};
module.exports = calculate;
