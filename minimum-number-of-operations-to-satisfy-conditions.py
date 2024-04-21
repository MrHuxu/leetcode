from functools import cache
from typing import List


class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        cnt = [[0] * 10 for _ in range(n)]
        for i in range(m):
            for j in range(n):
                cnt[j][grid[i][j]] += 1

        @cache
        def dfs(pre: int, idx: int) -> int:
            return (
                0
                if idx == n
                else min(
                    m - cnt[idx][i] + dfs(i, idx + 1) for i in range(10) if i != pre
                )
            )

        return dfs(-1, 0)


print(Solution().minimumOperations([[1, 0, 2], [1, 0, 2]]))
print(Solution().minimumOperations([[1, 1, 1], [0, 0, 0]]))
print(Solution().minimumOperations([[1], [2], [3]]))
