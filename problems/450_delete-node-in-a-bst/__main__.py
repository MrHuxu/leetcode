from typing import List, Optional, Tuple


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        list, found = self.preorder(root, key)
        return root if not found else self.build(list)

    def preorder(self, root: Optional[TreeNode], key: int) -> Tuple[List[int], bool]:
        if not root:
            return [], False
        list_l, found_l = self.preorder(root.left, key)
        list_r, found_r = self.preorder(root.right, key)
        return (
            list_l + ([] if root.val == key else [root.val]) + list_r,
            found_l or root.val == key or found_r,
        )

    def build(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None
        mid = len(nums) // 2
        return TreeNode(nums[mid], self.build(nums[:mid]), self.build(nums[mid + 1 :]))
