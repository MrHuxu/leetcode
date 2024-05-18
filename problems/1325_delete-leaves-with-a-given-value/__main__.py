# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def removeLeafNodes(
        self, root: Optional[TreeNode], target: int
    ) -> Optional[TreeNode]:
        if not root:
            return root
        left, right = self.removeLeafNodes(root.left, target), self.removeLeafNodes(
            root.right, target
        )
        if root.val != target:
            return TreeNode(root.val, left, right)
        return None if not left and not right else TreeNode(root.val, left, right)
