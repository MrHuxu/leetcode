import heapq
import unittest
from collections import Counter
from typing import List, Tuple


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        cnt = Counter(nums)
        heap = [(-value, key) for key, value in cnt.items()]
        heapq.heapify(heap)
        return [heapq.heappop(heap)[1] for _ in range(k)]


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2])
        self.assertEqual(solution.topKFrequent([1], 1), [1])
