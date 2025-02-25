# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        return self.getLeafValueSequence(root1) == self.getLeafValueSequence(root2)

    def getLeafValueSequence(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        if not root.left and not root.right:
            return [root.val]
        return self.getLeafValueSequence(root.left) + self.getLeafValueSequence(
            root.right
        )
