from typing import List


class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        n = len(nums)

        def helper(idx: int, curr: int) -> int:
            ret = 0
            for i in range(idx, n):
                next_ = curr ^ nums[i]
                ret += next_ + helper(i + 1, next_)
            return ret

        return helper(0, 0)


print(Solution().subsetXORSum([1, 3]))
print(Solution().subsetXORSum([5, 1, 6]))
print(Solution().subsetXORSum([3, 4, 5, 6, 7, 8]))
