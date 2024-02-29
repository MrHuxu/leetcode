# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        self.memo: Dict[Tuple[TreeNode, bool], int] = {}
        return self.helper(root, False)

    def helper(self, root: Optional[TreeNode], parent_robbed: bool) -> int:
        if not root:
            return 0
        if (root, parent_robbed) in self.memo:
            return self.memo[(root, parent_robbed)]
        ret = self.helper(root.left, False) + self.helper(root.right, False)
        if not parent_robbed:
            ret = max(
                ret,
                root.val + self.helper(root.left, True) + self.helper(root.right, True),
            )
        self.memo[(root, parent_robbed)] = ret
        return ret