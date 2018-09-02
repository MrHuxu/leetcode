/**
 * Problem: https://leetcode.com/problems/monotonic-array/description/
 */

const monotonicArray = arr => {
  let tmp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      if (0 === tmp) tmp = 1;
      else if (-1 === tmp) return false;
    } else if (arr[i] > arr[i + 1]) {
      if (0 === tmp) tmp = -1;
      else if (1 === tmp) return false;
    }
  }
  return true;
};

module.exports = monotonicArray;
