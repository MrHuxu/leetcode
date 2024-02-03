from functools import cache
from typing import List


class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)

        @cache
        def dfs(i: int) -> int:
            max_val, max_sum = 0, 0
            for j in range(i, min(i + k, n)):
                max_val = max(max_val, arr[j])
                max_sum = max(max_sum, max_val * (j - i + 1) + dfs(j + 1))
            return max_sum

        return dfs(0)


solution = Solution()
print(solution.maxSumAfterPartitioning(arr=[1, 15, 7, 9, 2, 5, 10], k=3))
print(solution.maxSumAfterPartitioning(arr=[1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], k=4))
