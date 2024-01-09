import itertools
from typing import List


class Solution:
    def getSumAbsoluteDifferences(self, nums: List[int]) -> List[int]:
        prefix_sums = list(itertools.accumulate(nums))
        return [
            (0 if i == 0 else num * i - prefix_sums[i - 1])
            + (
                0
                if i == len(nums) - 1
                else prefix_sums[-1] - prefix_sums[i] - (len(nums) - i - 1) * num
            )
            for i, num in enumerate(nums)
        ]


solution = Solution()
print(solution.getSumAbsoluteDifferences([2, 3, 5]))
print(solution.getSumAbsoluteDifferences([1, 4, 6, 8, 10]))
