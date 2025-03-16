from typing import List


class Solution:
    def maxSum(self, nums: List[int]) -> int:
        nums = sorted(list(set(nums)), reverse=True)
        if len(nums) == 1 or nums[0] <= 0:
            return nums[0]
        return sum(num for num in nums if num > 0)


print(Solution().maxSum([1, 2, 3, 4, 5]))
print(Solution().maxSum([1, 1, 0, 1, 1]))
print(Solution().maxSum([1, 2, -1, -2, 1, 0, -1]))
print(Solution().maxSum([-100]))
