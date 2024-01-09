/**
 * Problem: https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  nums.sort((n1, n2) => n1 > n2 ? -1 : 1);
  const sum = nums.reduce((prev, n) => prev + n, 0);

  if (sum % k) {
    return false;
  } else {
    const avg = sum / k;

    if (nums[0] > avg) return false;

    let i = 0;
    while(nums[i] >= avg) ++i;
    const usefulNums = nums.slice(i);

    let flag = false;
    const lefts = [];
    for (let i = 0; i < k - nums.length + usefulNums.length; ++i) lefts.push(avg);

    const dfs = (arr, i) => {
      if (i === usefulNums.length) {
        flag = true;
        return;
      } else {
        for (let j = 0; j < arr.length; ++j) {
          if (arr[j] >= usefulNums[i] && !flag) {
            const tmp = arr.slice(0);
            tmp[j] -= usefulNums[i];
            dfs(tmp, i + 1);
          }
        }
      }
    };
    dfs(lefts, 0);

    return flag;
  }
};

