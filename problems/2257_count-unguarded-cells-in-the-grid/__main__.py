from typing import List


class Solution:
    def countUnguarded(
        self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]
    ) -> int:
        grid = [[0] * n for _ in range(m)]
        for i, j in guards + walls:
            grid[i][j] = 2
        for x, y in guards:
            for i in reversed(range(x)):
                if grid[i][y] == 2:
                    break
                grid[i][y] = 1
            for i in range(x + 1, m):
                if grid[i][y] == 2:
                    break
                grid[i][y] = 1
            for j in reversed(range(y)):
                if grid[x][j] == 2:
                    break
                grid[x][j] = 1
            for j in range(y + 1, n):
                if grid[x][j] == 2:
                    break
                grid[x][j] = 1
        return sum(1 for i in range(m) for j in range(n) if not grid[i][j])


print(
    Solution().countUnguarded(
        m=4, n=6, guards=[[0, 0], [1, 1], [2, 3]], walls=[[0, 1], [2, 2], [1, 4]]
    )
)
print(
    Solution().countUnguarded(
        m=3, n=3, guards=[[1, 1]], walls=[[0, 1], [1, 0], [2, 1], [1, 2]]
    )
)
