"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def levelOrder(self, root: "Node") -> List[List[int]]:
        if not root:
            return []
        ret, level = [], [root]
        while level:
            next_level, vals = [], []
            for node in level:
                vals.append(node.val)
                next_level += node.children
            ret.append(vals)
            level = next_level
        return ret
