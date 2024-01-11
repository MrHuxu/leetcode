# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        return self.helper(root)[0]
    
    def helper(self, root: Optional[TreeNode]) -> Tuple[int, int, int]:
        if not root.left and not root.right:
            return 0, root.val, root.val
        max_diff, min_val, max_val = 0, root.val, root.val
        for sub_node in [root.left, root.right]:
            if sub_node:
                sub_max_diff, sub_min, sub_max = self.helper(sub_node)
                max_diff = max(max_diff, sub_max_diff)
                min_val = min(min_val, sub_min)
                max_val = max(max_val, sub_max)
        return max(max_diff, abs(root.val - min_val), abs(root.val - max_val)), min_val, max_val