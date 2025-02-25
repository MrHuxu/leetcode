# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        ret: List[int] = []
        level: List[TreeNode] = [root]
        while level:
            max_val = level[0].val
            next_level: List[TreeNode] = []
            for node in level:
                max_val = max(max_val, node.val)
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
            ret.append(max_val)
            level = next_level
        return ret
