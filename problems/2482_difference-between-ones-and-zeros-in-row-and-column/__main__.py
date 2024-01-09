from typing import List

class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        ones_row = [sum(row) for row in grid]
        zeros_row = [m - ones_row[i] for i in range(m)]
        ones_col = [sum(col) for col in zip(*grid)]
        zeros_col = [n - ones_col[i] for i in range(n)]
        return [[ones_row[i] + ones_col[j] - zeros_row[i] - zeros_col[j] for j in range(n)] for i in range(m)]

solution = Solution()
print(solution.onesMinusZeros(grid = [[0,1,1],[1,0,1],[0,0,1]]))
print(solution.onesMinusZeros(grid = [[1,1,1],[1,1,1]]))