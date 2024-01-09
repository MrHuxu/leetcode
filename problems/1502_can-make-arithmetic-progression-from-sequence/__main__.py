import unittest
from typing import List


class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        if len(arr) <= 2:
            return True
        arr.sort()
        for i in range(2, len(arr)):
            if arr[i] - arr[i - 1] != arr[i - 1] - arr[i - 2]:
                return False
        return True


class TestSolution(unittest.TestCase):
    def test(self):
        arr = [3, 5, 1]
        self.assertTrue(Solution().canMakeArithmeticProgression(arr))
        arr = [1, 2, 4]
        self.assertFalse(Solution().canMakeArithmeticProgression(arr))
