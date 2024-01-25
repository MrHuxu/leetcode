class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m + 1):
            for j in range(n + 1):
                if i == 0 or j == 0:
                    continue
                dp[i][j] = max(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1] + 1 if text1[i - 1] == text2[j - 1] else 0,
                )
        return dp[-1][-1]


solution = Solution()
assert solution.longestCommonSubsequence(text1="abcde", text2="ace") == 3
assert solution.longestCommonSubsequence(text1="abc", text2="abc") == 3
assert solution.longestCommonSubsequence(text1="abc", text2="def") == 0
