from typing import Optional, Tuple


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):

        self.val = val

        self.left = left
        self.right = right


class Solution:
    def getDirections(
        self, root: Optional[TreeNode], startValue: int, destValue: int
    ) -> str:
        def get_path(root: Optional[TreeNode], value: int) -> Tuple[str, bool]:
            if not root:
                return "", False
            if root.val == value:
                return "", True
            path, exist = get_path(root.left, value)
            if exist:
                return "L" + path, True
            path, exist = get_path(root.right, value)
            if exist:
                return "R" + path, True
            return "", False

        start_path, dest_path = (
            get_path(root, startValue)[0],
            get_path(root, destValue)[0],
        )
        common_path_len = 0
        for i in range(min(len(start_path), len(dest_path))):
            if start_path[i] != dest_path[i]:
                break
            common_path_len += 1
        return "U" * (len(start_path) - common_path_len) + dest_path[common_path_len:]
