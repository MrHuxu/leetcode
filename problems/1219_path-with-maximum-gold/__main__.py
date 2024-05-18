from typing import List, Set, Tuple

DIRECTIONS = [(-1, 0), (1, 0), (0, -1), (0, 1)]


class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def dfs(i: int, j: int, visited: Set[Tuple[int, int]]) -> int:
            visited.add((i, j))
            ret = grid[i][j]
            for di, dj in DIRECTIONS:
                ni, nj = i + di, j + dj
                if (
                    0 <= ni < m
                    and 0 <= nj < n
                    and grid[ni][nj]
                    and (ni, nj) not in visited
                ):
                    ret = max(ret, grid[i][j] + dfs(ni, nj, visited))
            visited.remove((i, j))
            return ret

        ret = 0
        for i in range(m):
            for j in range(n):
                if not grid[i][j]:
                    continue
                # print(i, j, dfs(i, j, set()))
                ret = max(ret, dfs(i, j, set()))
        return ret


print(
    Solution().getMaximumGold(
        [
            [1, 0, 7, 0, 0, 0],
            [2, 0, 6, 0, 1, 0],
            [3, 5, 6, 7, 4, 2],
            [4, 3, 1, 0, 2, 0],
            [3, 0, 5, 0, 20, 0],
        ]
    )
)
# print(Solution().getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]))  # 24
# print(
#     Solution().getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]])
# )  # 28
