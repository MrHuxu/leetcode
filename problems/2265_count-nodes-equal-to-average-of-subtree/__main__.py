# Definition for a binary tree node.
from typing import Optional, Tuple


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        return self.helper(root)[2]

    def helper(self, root: Optional[TreeNode]) -> Tuple[int, int, int]:
        if not root:
            return 0, 0, 0

        left_sum, left_cnt, left_ret = self.helper(root.left)
        right_sum, right_cnt, right_ret = self.helper(root.right)
        sum, cnt, ret = (
            left_sum + right_sum + root.val,
            left_cnt + right_cnt + 1,
            left_ret + right_ret,
        )
        if sum // cnt == root.val:
            ret += 1
        return sum, cnt, ret
