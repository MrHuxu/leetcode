from typing import List
from itertools import accumulate


class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        accu = list(accumulate(nums))
        n, total_sum = len(nums), accu[-1]
        return sum(1 for i in range(n - 1) if accu[i] >= total_sum - accu[i])


print(Solution().waysToSplitArray(nums=[10, 4, -8, 7]))
print(Solution().waysToSplitArray(nums=[2, 3, 1, 0]))
