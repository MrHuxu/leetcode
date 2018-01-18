/**
 * Problem: https://leetcode.com/problems/beautiful-arrangement-ii/description/
 */

const beautifulArrangementIi = (n, k) => {
  const res = [];
  let left = 1, right = k + 1;
  while (left <= right) {
    if (left === right) res.push(left++);
    else res.push(left++, right--);
  }
  for (let i = k + 2; i <= n; i++) res.push(i);

  return res;
};

module.exports = beautifulArrangementIi;
