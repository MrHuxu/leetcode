import heapq
import unittest
from typing import List


class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.heap = []
        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        self.heap.append(val)
        if len(self.heap) > self.k:
            heapq.heapify(self.heap)
            heapq.heappop(self.heap)
        heapq.heapify(self.heap)
        return self.heap[0]

        # Your KthLargest object will be instantiated and called as such:
        # obj = KthLargest(k, nums)
        # param_1 = obj.add(val)


class TestSolution(unittest.TestCase):
    def test(self):
        kthLargest = KthLargest(3, [4, 5, 8, 2])
        self.assertEqual(kthLargest.add(3), 4)
        self.assertEqual(kthLargest.add(5), 5)
        self.assertEqual(kthLargest.add(10), 5)
        self.assertEqual(kthLargest.add(9), 8)
        self.assertEqual(kthLargest.add(4), 8)
