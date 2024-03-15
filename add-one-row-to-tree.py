# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(
        self, root: Optional[TreeNode], val: int, depth: int
    ) -> Optional[TreeNode]:
        dummy_root = TreeNode(0, root)
        row = [dummy_root]
        for _ in range(depth - 1):
            row = [
                child
                for node in row
                for child in ([node.left] if node.left else [])
                + ([node.right] if node.right else [])
            ]
        for node in row:
            node.left, node.right = TreeNode(val, node.left), TreeNode(
                val, None, node.right
            )
        return dummy_root.left
