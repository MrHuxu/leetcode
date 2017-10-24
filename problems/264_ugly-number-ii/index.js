/**
 * Problem: https://leetcode.com/problems/ugly-number-ii/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var nums = [1], tmp, pos, flag;
  
  for (var i = 0; i < n - 1; ++i) {
    pos = i, tmp = nums[i] * 5 + 1;
    while (nums[pos]) {
      flag = nums[pos] * 5 > nums[i];
      if (nums[pos] * 2 > nums[i] && nums[pos] * 2 < tmp)
        tmp = nums[pos] * 2;
      else if (nums[pos] * 3 > nums[i] && nums[pos] * 3 < tmp)
        tmp = nums[pos] * 3;
      else if (nums[pos] * 5 > nums[i] && nums[pos] * 5 < tmp)
        tmp = nums[pos] * 5;
      
      if (flag)
        --pos;
      else
        break;
    }
    nums.push(tmp);
  }
  
  return nums[n - 1];
};
module.exports = nthUglyNumber;
