MOD = 10**9 + 7


class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        dp = [[0] * (target + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            for j in range(1, target + 1):
                if i == 1 and j <= k:
                    dp[i][j] = 1
                if i < n and dp[i][j] > 0:
                    for kk in range(1, k + 1):
                        if j + kk <= target:
                            dp[i + 1][j + kk] = (dp[i + 1][j + kk] + dp[i][j]) % MOD
        return dp[-1][-1]
