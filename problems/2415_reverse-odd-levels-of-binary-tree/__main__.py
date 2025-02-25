from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        levels = [[root]]
        while True:
            if not levels[-1][0].left:
                break

            next_level = []
            for node in levels[-1] if len(levels) % 2 else reversed(levels[-1]):
                next_level.append(node.left)
                next_level.append(node.right)
            if len(levels) % 2:
                next_level = next_level[::-1]
            levels.append(next_level)

        for i in range(0, len(levels) - 1):
            for j in range(len(levels[i])):
                levels[i][j].left, levels[i][j].right = (
                    levels[i + 1][2 * j],
                    levels[i + 1][2 * j + 1],
                )

        return root


"""
Input:
[0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]
Output:
[0,2,1,0,0,0,0,1,1,1,1,2,2,2,2]
Expected:
[0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]

"""
ret = Solution().reverseOddLevels(
    TreeNode(
        0,
        TreeNode(
            1,
            TreeNode(0, TreeNode(1), TreeNode(1)),
            TreeNode(0, TreeNode(1), TreeNode(1)),
        ),
        TreeNode(
            2,
            TreeNode(0, TreeNode(2), TreeNode(2)),
            TreeNode(0, TreeNode(2), TreeNode(2)),
        ),
    )
)
print(ret.val)
print(ret.left.val, ret.right.val)
print(ret.left.left.val, ret.left.right.val, ret.right.left.val, ret.right.right.val)
print(
    ret.left.left.left.val,
    ret.left.left.right.val,
    ret.left.right.left.val,
    ret.left.right.right.val,
    ret.right.left.left.val,
    ret.right.left.right.val,
    ret.right.right.left.val,
    ret.right.right.right.val,
)
