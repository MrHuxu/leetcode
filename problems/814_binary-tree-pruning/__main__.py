# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def helper(node):
            if not node:
                return None, True
            node.left, l_no_1 = helper(node.left)
            node.right, r_no_1 = helper(node.right)
            return (
                (None, True) if l_no_1 and r_no_1 and node.val != 1 else (node, False)
            )

        return helper(root)[0]
