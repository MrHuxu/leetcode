"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def maxDepth(self, root: "Node") -> int:
        return (
            0
            if not root
            else 1
            + (
                0
                if not root.children
                else max([self.maxDepth(child) for child in root.children])
            )
        )
