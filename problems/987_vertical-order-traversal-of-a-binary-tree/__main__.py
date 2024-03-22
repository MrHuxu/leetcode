# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        pos_vals, level = {}, [(root, 0)]
        while level:
            tmp, next_level = {}, []
            for node, pos in level:
                tmp.setdefault(pos, []).append(node.val)
                if node.left:
                    next_level.append((node.left, pos - 1))
                if node.right:
                    next_level.append((node.right, pos + 1))
            for k, v in tmp.items():
                pos_vals[k] = pos_vals.get(k, []) + sorted(v)
            level = next_level
        return [pos_vals[pos] for pos in sorted(pos_vals.keys())]
