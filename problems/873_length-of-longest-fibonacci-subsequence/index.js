/**
 * Problem: https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/
 */

const lengthOfLongestFibonacciSubsequence = nums => {
  const dp = nums.reduce((pre, curr) => {
    for (let list of pre) {
      if (1 === list.length) pre.push([list[0], curr]);
      else if (list[list.length - 1] + list[list.length - 2] === curr) list.push(curr);
    }
    pre.push([curr]);
    return pre;
  }, []);

  const res = Math.max(...dp.map(list => list.length));
  return res > 2 ? res : 0;
};

module.exports = lengthOfLongestFibonacciSubsequence;
