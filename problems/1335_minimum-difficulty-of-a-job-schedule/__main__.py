from typing import Dict, List


class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        n = len(jobDifficulty)
        if n < d:
            return -1
        if n == d:
            return sum(jobDifficulty)

        # max_nums[i][j] = max(jobDifficulty[i:j])
        max_nums: Dict[Dict[int, int]] = {}
        for l in range(1, n + 1):
            for i in range(n - l + 1):
                if l == 1:
                    max_nums.setdefault(i, {})[i + l] = jobDifficulty[i]
                else:
                    max_nums[i][i + l] = max(
                        max_nums[i][i + l - 1], jobDifficulty[i + l - 1]
                    )

        dp = [[0] * (n + 1) for _ in range(d + 1)]
        for i in range(1, d + 1):
            for j in range(i, n + 1):
                if i == 1:
                    dp[i][j] = max(jobDifficulty[:j])
                    continue

                dp[i][j] = 300 * 1000
                if i == j:
                    dp[i][j] = sum(jobDifficulty[:i])
                else:
                    dp[i][j] = min(
                        dp[i][j],
                        min((dp[i - 1][k] + max_nums[k][j]) for k in range(i - 1, j)),
                    )
        return dp[-1][-1]


solution = Solution()
assert solution.minDifficulty([7, 1, 7, 1, 7, 1], 3) == 15
assert solution.minDifficulty([11, 111, 22, 222, 33, 333, 44, 444], 6) == 843
assert solution.minDifficulty([6, 5, 4, 3, 2, 1], 2) == 7
assert solution.minDifficulty([9, 9, 9], 4) == -1
assert solution.minDifficulty([1, 1, 1], 3) == 3
