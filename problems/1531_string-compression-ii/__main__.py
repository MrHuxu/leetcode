class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        n = len(s)
        dp = [[0] * (k + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            for j in range(min(i, k) + 1):
                dp[i][j] = n
                if j > 0:
                    dp[i][j] = min(dp[i][j], dp[i - 1][j - 1])
                need_remove, group_cnt = 0, 0
                for kk in reversed(range(1, i + 1)):
                    if s[kk - 1] != s[i - 1]:
                        need_remove += 1
                    else:
                        group_cnt += 1

                    if need_remove > j:
                        break

                    if group_cnt == 1:
                        dp[i][j] = min(dp[i][j], dp[kk - 1][j - need_remove] + 1)
                    elif group_cnt < 10:
                        dp[i][j] = min(dp[i][j], dp[kk - 1][j - need_remove] + 2)
                    elif group_cnt < 100:
                        dp[i][j] = min(dp[i][j], dp[kk - 1][j - need_remove] + 3)
                    else:
                        dp[i][j] = min(dp[i][j], dp[kk - 1][j - need_remove] + 4)
        return dp[-1][-1]


solution = Solution()
print(solution.getLengthOfOptimalCompression("aaabcccd", 2) == 4)
print(solution.getLengthOfOptimalCompression("aabbaa", 2) == 2)
print(solution.getLengthOfOptimalCompression("aaaaaaaaaaa", 0) == 3)
