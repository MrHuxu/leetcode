from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:

        def helper(idx: int, pre: List[int]) -> List[List[int]]:
            if idx == len(nums):
                return [pre]
            return helper(idx + 1, pre) + helper(idx + 1, pre + [nums[idx]])

        return helper(0, [])


print(Solution().subsets([1, 2, 3]))
