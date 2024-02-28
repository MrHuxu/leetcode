# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        row = [root]
        while True:
            next_row = []
            for node in row:
                if node.left: next_row.append(node.left)
                if node.right: next_row.append(node.right)
            if not next_row:
                break
            row = next_row
        return row[0].val