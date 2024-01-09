import unittest
from typing import List


class Solution:
    def minCost(self, nums: List[int], cost: List[int]) -> int:
        left, right = min(nums), max(nums)
        ret = min(self.getCost(left, nums, cost),
                  self.getCost(right, nums, cost))
        while left <= right:
            mid = (left + right) // 2
            cost1, cost2 = self.getCost(
                mid, nums, cost), self.getCost(mid + 1, nums, cost)
            ret = min(ret, cost1, cost2)
            if cost1 < cost2:
                right = mid - 1
            else:
                left = mid + 1
        return ret

    def getCost(self, num: int, nums: List[int], cost: List[int]) -> int:
        ret = 0
        for i in range(len(nums)):
            ret += cost[i] * abs(num - nums[i])
        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.minCost(
            [1, 3, 5, 2], [2, 3, 1, 14]), 8)
        self.assertEqual(solution.minCost(
            [2, 2, 2, 2, 2], [4, 2, 8, 1, 3]), 0)
