import math
from typing import List


class Solution:
    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        nums = set(nums)
        n = len(nums)
        if 1 in nums:
            return False
        if n == 1:
            return True

        nums = sorted(nums, reverse=True)
        for i in range(n - 1):
            for j in range(i + 1, n):
                if math.gcd(nums[i], nums[j]) > 1:
                    nums[j] *= nums[i]
                    break
            else:
                return False
        return True


solution = Solution()
print(solution.canTraverseAllPairs(nums=[2, 3, 6]))
print(solution.canTraverseAllPairs(nums=[3, 9, 5]))
print(solution.canTraverseAllPairs(nums=[4, 3, 12, 8]))
