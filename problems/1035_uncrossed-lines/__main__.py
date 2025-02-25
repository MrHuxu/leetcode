import unittest
from typing import List


class Solution:
    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
        m = len(nums1)
        n = len(nums2)
        dp: List[List[int]] = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(m + 1):
            for j in range(n + 1):
                if i == 0 or j == 0:
                    continue
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = max(dp[i][j], dp[i - 1][j - 1] + 1)
        return dp[m][n]


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(2, solution.maxUncrossedLines([1, 2, 4], [1, 4, 2]))
        self.assertEqual(
            3, solution.maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])
        )
