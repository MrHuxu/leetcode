# Definition for a binary tree node.
from typing import Dict, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pseudoPalindromicPaths(self, root: Optional[TreeNode]) -> int:
        return self.helper(root, {})

    def helper(self, root: Optional[TreeNode], cnt: Dict[int, int]) -> int:
        if not root:
            return 0

        cnt[root.val] = cnt.get(root.val, 0) + 1

        if not root.left and not root.right:
            ret = 1 if self.validate(cnt) else 0
            cnt[root.val] -= 1
            return ret

        ret = self.helper(root.left, cnt) + self.helper(root.right, cnt)
        cnt[root.val] -= 1
        return ret

    def validate(self, cnt: Dict[int, int]) -> int:
        return sum(1 for v in cnt.values() if v % 2 == 1) <= 1


solution = Solution()
print(
    solution.pseudoPalindromicPaths(
        root=TreeNode(
            2,
            TreeNode(3, TreeNode(3), TreeNode(1)),
            TreeNode(1, None, TreeNode(1)),
        )
    )
)
print(
    solution.pseudoPalindromicPaths(
        root=TreeNode(
            2,
            TreeNode(1, TreeNode(1), TreeNode(3, None, TreeNode(1))),
            TreeNode(1),
        )
    )
)
