# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        ret, _ = self.helper(root)
        return ret

    def helper(self, root: Optional[TreeNode]) -> Tuple[int, int]:
        if not root:
            return 0, 0
        left_diameter, left_depth = self.helper(root.left)
        right_diameter, right_depth = self.helper(root.right)
        return max(left_diameter, right_diameter, left_depth + right_depth), 1 + max(
            left_depth, right_depth
        )
