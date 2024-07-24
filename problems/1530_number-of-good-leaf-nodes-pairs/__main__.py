from typing import Dict, Optional, Tuple


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        def helper(node: Optional[TreeNode]) -> Tuple[Dict[int, int], int]:
            if not node:
                return {}, 0
            if not node.left and not node.right:
                return {1: 1}, 0
            left, cntl = helper(node.left)
            right, cntr = helper(node.right)
            ret, cnt = {}, 0
            for k, v in left.items():
                ret[k + 1] = ret.get(k + 1, 0) + v
                for kk, vv in right.items():
                    if k + kk <= distance:
                        cnt += v * vv
            for k, v in right.items():
                ret[k + 1] = ret.get(k + 1, 0) + v
            return ret, cnt + cntl + cntr

        return helper(root)[1]


print(
    Solution().countPairs(TreeNode(1, TreeNode(2, None, TreeNode(4)), TreeNode(3)), 3)
)
print(
    Solution().countPairs(
        TreeNode(
            1,
            TreeNode(2, TreeNode(4), TreeNode(5)),
            TreeNode(3, TreeNode(6), TreeNode(7)),
        ),
        3,
    )
)