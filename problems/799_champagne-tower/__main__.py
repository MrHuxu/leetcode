class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        dp = [[0.0] * (query_row + 1) for _ in range(query_row + 1)]
        dp[0][0] = poured
        for i in range(query_row):
            for j in range(i + 1):
                tmp = max(0, (dp[i][j] - 1) / 2)
                dp[i + 1][j] += tmp
                dp[i + 1][j + 1] += tmp
        return min(1, dp[query_row][query_glass])


solution = Solution()
print(solution.champagneTower(25, 6, 1))
