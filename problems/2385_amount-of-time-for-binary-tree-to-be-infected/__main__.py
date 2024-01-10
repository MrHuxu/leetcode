# Definition for a binary tree node.
from typing import Optional, Tuple


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        return self.helper(root, start)[1]

    def helper(self, root: Optional[TreeNode], start: int) -> Tuple[int, int]:
        if not root:
            return -1, 0

        if root.val == start:
            return 0, max(
                self.helper(root.left, start)[1], self.helper(root.right, start)[1]
            )

        left_start_depth, left_times = self.helper(root.left, start)
        right_start_depth, right_times = self.helper(root.right, start)
        # print(root.val, left_start_depth, left_times, right_start_depth, right_times)
        if left_start_depth != -1:
            return left_start_depth + 1, max(
                1 + right_times + left_start_depth, left_times
            )
        elif right_start_depth != -1:
            return (
                right_start_depth + 1,
                max(1 + right_start_depth + left_times, right_times),
            )
        else:
            return -1, 1 + max(left_times, right_times)


solution = Solution()
root = TreeNode(
    1,
    TreeNode(5, None, TreeNode(4, TreeNode(9), TreeNode(2))),
    TreeNode(3, TreeNode(10), TreeNode(6)),
)
assert solution.amountOfTime(root, 3) == 4
root = TreeNode(1)
assert solution.amountOfTime(root, 1) == 0
