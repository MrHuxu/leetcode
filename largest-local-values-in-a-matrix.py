class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        tmp = [
            [max(grid[i][j], grid[i][j + 1], grid[i][j + 2]) for j in range(n - 2)]
            for i in range(n)
        ]
        return [
            [max(tmp[i][j], tmp[i + 1][j], tmp[i + 2][j]) for j in range(n - 2)]
            for i in range(n - 2)
        ]
