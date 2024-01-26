import sys
import unittest
from typing import Optional, Tuple


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        _, _, ret = self.helper(root)
        return ret

    def helper(self, root: Optional[TreeNode]) -> Tuple[int, int, int]:
        if not root:
            return sys.maxsize, -sys.maxsize, sys.maxsize
        left_min, left_max, left_ret = self.helper(root.left)
        right_min, right_max, right_ret = self.helper(root.right)
        ret = min(left_ret, right_ret, abs(
            left_max - root.val), abs(right_min - root.val))
        return min(left_min, root.val), max(right_max, root.val), ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.getMinimumDifference(
            TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)))), 1)
