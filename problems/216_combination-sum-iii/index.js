/**
 * Problem: https://leetcode.com/problems/combination-sum-iii/description/
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (n < k || n > k * 9) return [];
  var result = [], tmp;
  
  var recursion = function (arr, sum, num) {
    if (sum + num > n)
      return;
    else if (sum + num === n) {
      arr.push(num);
      if (arr.length === k)
        result.push(arr);
      else
        return;
    } else {
      if (arr.length > k - 1)
        return;
      else if (num <= 8) {
        tmp = arr.slice();
        tmp.push(num);
        recursion(tmp, sum + num, num + 1);
        
        tmp = arr.slice();
        recursion(tmp, sum, num + 1);
      }
    }
  };
  recursion([], 0, 1);
  
  return result;
};
module.exports = combinationSum3;
