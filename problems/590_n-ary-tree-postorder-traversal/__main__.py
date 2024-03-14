"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def postorder(self, root: "Node") -> List[int]:
        return (
            []
            if not root
            else [val for child in root.children for val in self.postorder(child)]
            + [root.val]
        )
