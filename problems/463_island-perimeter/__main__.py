class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ret, row, col = 0, len(grid), len(grid[0])
        for i in range(row):
            for j in range(col):
                if grid[i][j] == 0:
                    continue
                for direction in [[-1, 0], [0, -1], [0, 1], [1, 0]]:
                    x, y = i + direction[0], j + direction[1]
                    if not (0 <= x < row and 0 <= y < col and grid[x][y] == 1):
                        ret += 1
        return ret
