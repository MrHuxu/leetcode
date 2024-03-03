from typing import List


class Solution:
    def countSubmatrices(self, grid: List[List[int]], k: int) -> int:
        ret = 0
        for i, row in enumerate(grid):
            sum = 0
            for j, cell in enumerate(row):
                sum += cell
                if i == 0:
                    grid[i][j] = sum
                else:
                    grid[i][j] = sum + grid[i - 1][j]
                if grid[i][j] <= k:
                    ret += 1
        return ret


print(Solution().countSubmatrices(grid=[[7, 6, 3], [6, 6, 1]], k=18))
print(Solution().countSubmatrices(grid=[[7, 2, 9], [1, 5, 0], [2, 6, 6]], k=20))
