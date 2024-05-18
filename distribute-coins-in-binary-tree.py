from typing import Optional, Tuple


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        def helper(node: Optional[TreeNode]) -> Tuple[int, int]:
            if not node:
                return 0, 0
            left_children_cnt, left_steps = helper(node.left)
            right_children_cnt, right_steps = helper(node.right)
            return (
                node.val + left_children_cnt + right_children_cnt - 1,
                left_steps
                + right_steps
                + abs(left_children_cnt)
                + abs(right_children_cnt),
            )

        return helper(root)[1]


print(Solution().distributeCoins(TreeNode(3, TreeNode(0), TreeNode(0))))
print(Solution().distributeCoins(TreeNode(0, TreeNode(3), TreeNode(0))))
