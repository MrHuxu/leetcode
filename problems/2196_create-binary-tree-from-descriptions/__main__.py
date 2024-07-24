from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        if not descriptions:
            return None

        ret = None
        map_val_node = {val: TreeNode(val) for _, val, _ in descriptions}
        for parent, val, isLeft in descriptions:
            if parent not in map_val_node:
                ret = TreeNode(parent)
                map_val_node[parent] = ret

            if isLeft:
                map_val_node[parent].left = map_val_node[val]
            else:
                map_val_node[parent].right = map_val_node[val]
        return ret


print(
    Solution().createBinaryTree(
        [[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]
    )
)