import unittest


mod = 10 ** 9 + 7


class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        dp = [0 for _ in range(high+1)]

        ret = 0
        for i in range(high + 1):
            if i == 0:
                dp[i] = 1

            if i + zero < len(dp):
                dp[i + zero] = (dp[i + zero] + dp[i]) % mod
            if i + one < len(dp):
                dp[i + one] = (dp[i + one] + dp[i]) % mod

            if i >= low and i <= high:
                ret = (ret + dp[i]) % mod

        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.countGoodStrings(
            low=3, high=3, zero=1, one=1), 8)
        self.assertEqual(solution.countGoodStrings(
            low=2, high=3, zero=1, one=2), 5)
