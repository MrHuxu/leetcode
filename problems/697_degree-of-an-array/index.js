/**
 * Problem: https://leetcode.com/problems/degree-of-an-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let degree = 0, result = nums.length;
  const times = {}, degNums = [];
  for (let num of nums) {
    times[num] = times[num] ? times[num] + 1 : 1;
    degree = Math.max(degree, times[num]);
  }
  for (let key of Object.keys(times)) {
    if (times[key] === degree) degNums.push(parseInt(key));
  }

  for (let degNum of degNums) {
    let i = 0, j = nums.length - 1;
    while (nums[i] !== degNum) i++;
    while (nums[j] !== degNum) j--;
    result = Math.min(result, j - i + 1);
    if (result === degree) break;
  }

  return result;
};

module.exports = findShortestSubArray;
