/**
 * Problem: https://leetcode.com/problems/two-sum/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const tmp = {};
  for (let i = 0; i < nums.length; i++) {
    if (tmp[nums[i]])
      tmp[nums[i]].push(i);
    else
      tmp[nums[i]] = [i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (tmp[target - nums[i]]) {
      if (target - nums[i] === nums[i]) {
        if (tmp[nums[i]].length > 1)
          return [tmp[nums[i]][0], tmp[nums[i]][1]];
        else
          continue;
      } else
        return [i, tmp[target - nums[i]][0]];
    }
  }
};
module.exports = twoSum;
