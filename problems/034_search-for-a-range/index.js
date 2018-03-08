/**
 * Problem: https://leetcode.com/problems/search-for-a-range/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const search = (start, end) => {
    if (start > end) return false;
    else if (start === end) return nums[start] === target && start + 1;

    const m = parseInt((start + end) / 2);
    if (nums[m] === target) return m + 1;
    else return search(start, m - 1) || search(m + 1, end); 
  };
  const pos = search(0, nums.length - 1);
  if (!pos) return [-1, -1];
  let front = tail = pos - 1;
  while(nums[front - 1] === target) front--;
  while(nums[tail + 1] === target) tail++;
  return [front, tail];
};

module.exports = searchRange;
