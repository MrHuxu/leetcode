import unittest
from typing import List


class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        prefix_sums = [0] * n
        prefix_sums[0] = nums[0]
        for i in range(1, n):
            prefix_sums[i] = prefix_sums[i - 1] + nums[i]
        ret = [-1] * n
        for i in range(k, n - k):
            ret[i] = (prefix_sums[i + k] -
                      prefix_sums[i - k] + nums[i - k]) // (k * 2 + 1)
        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertListEqual(solution.getAverages(
            [7, 4, 3, 9, 1, 8, 5, 2, 6],  3), [-1, -1, -1, 5, 4, 4, -1, -1, -1])
