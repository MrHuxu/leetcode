# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        if not root.left and not root.right:
            return root.val == 1
        return (
            self.evaluateTree(root.left) or self.evaluateTree(root.right)
            if root.val == 2
            else self.evaluateTree(root.left) and self.evaluateTree(root.right)
        )
