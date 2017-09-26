/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const result = [];
  const dfs = (num, count, i) => {
    result[count] = result[count] ? result[count] + 1 : 1;

    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[j] > num) {
        dfs(nums[j], count + 1, j);
      }
    }
  };
  dfs(Number.MIN_SAFE_INTEGER, 0, -1);
  return nums.length && result.pop();
};

console.log(findNumberOfLIS([]));
console.log(findNumberOfLIS([1]));
console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));