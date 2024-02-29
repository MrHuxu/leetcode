# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        idx, level = 0, [root]
        while level:
            next_level = []
            for i, node in enumerate(level):
                if idx % 2 == node.val % 2:
                    return False
                if i > 0 and (
                    (idx % 2 == 0 and node.val <= level[i - 1].val)
                    or (idx % 2 == 1 and node.val >= level[i - 1].val)
                ):
                    return False
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
            level = next_level
            idx += 1
        return True
