# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        if not root:
            return ""
        return (
            str(root.val)
            + (
                f"({self.tree2str(root.left)})"
                if root.left
                else ("()" if root.right else "")
            )
            + (f"({self.tree2str(root.right)})" if root.right else "")
        )
