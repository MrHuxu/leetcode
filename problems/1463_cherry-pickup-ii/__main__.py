class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[[0] * n for _ in range(n)] for _ in range(m)]

        for row in reversed(range(m)):
            for col1 in range(n):
                for col2 in range(n):
                    result = grid[row][col1]
                    if col1 != col2:
                        result += grid[row][col2]

                    if row != m - 1:
                        tmp = 0
                        for new_col1 in range(max(col1 - 1, 0), min(col1 + 2, n)):
                            for new_col2 in range(max(col2 - 1, 0), min(col2 + 2, n)):
                                tmp = max(tmp, dp[row + 1][new_col1][new_col2])
                        result += tmp

                    dp[row][col1][col2] = result

        return dp[0][0][-1]
