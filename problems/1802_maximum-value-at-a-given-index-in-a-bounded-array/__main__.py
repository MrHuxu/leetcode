import unittest


class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        left, right = 0, maxSum
        while left <= right:
            mid = (left + right) // 2
            leftLen = index
            leftMin, leftMax = mid - leftLen if mid > leftLen else 1, mid - 1 if mid > 1 else 1
            leftSum = (leftMin + leftMax) * (leftMax - leftMin + 1) // 2 + (leftLen - leftMax if leftLen >= leftMax else 0) if leftLen > 0 else 0
            rightLen = n - index
            rightMin, rightMax = mid - rightLen + 1 if rightLen <= mid else 1, mid
            rightSum = (rightMin + rightMax) * (rightMax - rightMin + 1) // 2 + (rightLen - rightMax if rightLen >= rightMax else 0) if rightLen > 0 else 0
            if leftSum + rightSum <= maxSum:
                left = mid + 1
            else:
                right = mid - 1
        return right 

class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.maxValue(4, 2, 6), 2)
        self.assertEqual(solution.maxValue(6, 1, 10), 3)
        self.assertEqual(solution.maxValue(3, 2, 18), 7)
        self.assertEqual(solution.maxValue(4, 0, 4), 1)
        self.assertEqual(solution.maxValue(4, 3, 4), 1)
