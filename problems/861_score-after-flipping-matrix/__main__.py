from typing import List


class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        for i in range(m):
            if grid[i][0] == 0:
                for j in range(n):
                    grid[i][j] = 0 if grid[i][j] == 1 else 1
        for i in range(n):
            cnt_0, cnt_1 = 0, 0
            for j in range(m):
                if grid[j][i] == 0:
                    cnt_0 += 1
                else:
                    cnt_1 += 1
            if cnt_0 > cnt_1:
                for j in range(m):
                    grid[j][i] = 0 if grid[j][i] == 1 else 1
        return sum(1 << (n - 1 - j) for j in range(n) for i in range(m) if grid[i][j])


print(Solution().matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]))
print(Solution().matrixScore([[0]]))
