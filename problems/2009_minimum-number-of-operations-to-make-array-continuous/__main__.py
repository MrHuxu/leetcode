import sys
from bisect import bisect_right
from typing import List


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        nums = sorted(set(nums))

        ret = sys.maxsize
        for i, num in enumerate(nums):
            larger_num = num + n - 1
            idx = bisect_right(nums, larger_num)
            ret = min(ret, n - idx + i)

        return ret


solution = Solution()
print(solution.minOperations([4, 2, 5, 3]))
print(solution.minOperations([1, 10, 100, 1000]))
