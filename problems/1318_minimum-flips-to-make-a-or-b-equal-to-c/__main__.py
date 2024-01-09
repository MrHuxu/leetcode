import unittest


class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        ret = 0
        while a != 0 or b != 0 or c != 0:
            if c & 1 == 1:
                ret += 1 if a & 1 == 0 and b & 1 == 0 else 0
            else:
                ret += (a & 1) + (b & 1)
            a = a >> 1
            b = b >> 1
            c = c >> 1
        return ret


class TestSolution(unittest.TestCase):
    def test_minFlips(self):
        self.assertEqual(Solution().minFlips(2, 6, 5), 3)
        self.assertEqual(Solution().minFlips(4, 2, 7), 1)
        self.assertEqual(Solution().minFlips(8, 3, 5), 3)
