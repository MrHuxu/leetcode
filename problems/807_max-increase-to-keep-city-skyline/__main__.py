class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        n = len(grid)
        h_r, h_c = [0] * n, [0] * n
        for i in range(n):
            for j in range(n):
                h_r[i] = max(h_r[i], grid[i][j])
                h_c[j] = max(h_c[j], grid[i][j])
        ret = 0
        for i in range(n):
            for j in range(n):
                change = min(h_r[i], h_c[j]) - grid[i][j]
                if change > 0:
                    ret += change
        return ret
