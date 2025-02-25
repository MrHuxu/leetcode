import unittest
from typing import List


class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        dp: List[int] = [0 for _ in range(n)]

        ret = 0
        for i in range(n):
            if i == 0 or i == 1:
                ret = max(ret, questions[i][0])
            else:
                dp[i] = max(dp[i], dp[i - 1])
                ret = max(ret, dp[i] + questions[i][0])

            if i + questions[i][1] + 1 < n:
                dp[i + questions[i][1] + 1] = max(
                    dp[i + questions[i][1] + 1], dp[i] + questions[i][0]
                )

        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]]), 5)
