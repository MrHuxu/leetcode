import heapq
import unittest
from typing import List


class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        ret = 0
        totalSum = 0
        heap = []

        merged = [[nums2[i], nums1[i]] for i in range(len(nums1))]
        merged.sort(key=lambda x: x[0], reverse=True)

        for max2, num1 in merged:
            if len(heap) == k:
                totalSum -= heapq.heappop(heap)

            totalSum += num1
            heapq.heappush(heap, num1)

            if len(heap) == k:
                ret = max(ret, totalSum * max2)

        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.maxScore(
            [1, 3, 3, 2], [2, 1, 3, 4], 3), 12)
        self.assertEqual(solution.maxScore(
            [4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1
        ), 30)
