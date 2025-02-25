import unittest
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        max_val, max_val_level = root.val, 1
        level, level_num = [root], 1
        while level:
            next_level = []
            sum = 0
            for node in level:
                sum += node.val
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)

            if sum > max_val:
                max_val = sum
                max_val_level = level_num

            level = next_level
            level_num += 1

        return max_val_level


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(
            solution.maxLevelSum(
                TreeNode(1, TreeNode(7), TreeNode(0, TreeNode(-8), None))
            ),
            2,
        )
