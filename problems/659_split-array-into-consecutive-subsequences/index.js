/**
 * Problem: https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = nums => !nums.reduce((pre, num) => {
  let idx = null, minLen = Number.MAX_SAFE_INTEGER;

  pre.forEach((subArr, index) => {
    if (subArr[subArr.length - 1] === num - 1) {
      if (subArr.length < minLen) {
        idx = index;
        minLen = subArr.length;
      }
    }
  });
    
  if (idx !== null) pre[idx].push(num);
  else pre.push([num]);

  return pre;
}, []).find(arr => arr.length < 3);

module.exports = isPossible;
