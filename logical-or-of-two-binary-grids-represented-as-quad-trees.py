# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight


class Solution:
    def intersect(self, quadTree1: "Node", quadTree2: "Node") -> "Node":
        if quadTree1.isLeaf and quadTree2.isLeaf:
            return Node(quadTree1.val or quadTree2.val, 1, None, None, None, None)
        topLeft = self.intersect(
            (
                quadTree1.topLeft
                if quadTree1.topLeft
                else Node(quadTree1.val, 1, None, None, None, None)
            ),
            (
                quadTree2.topLeft
                if quadTree2.topLeft
                else Node(quadTree2.val, 1, None, None, None, None)
            ),
        )
        topRight = self.intersect(
            (
                quadTree1.topRight
                if quadTree1.topRight
                else Node(quadTree1.val, 1, None, None, None, None)
            ),
            (
                quadTree2.topRight
                if quadTree2.topRight
                else Node(quadTree2.val, 1, None, None, None, None)
            ),
        )
        bottomLeft = self.intersect(
            (
                quadTree1.bottomLeft
                if quadTree1.bottomLeft
                else Node(quadTree1.val, 1, None, None, None, None)
            ),
            (
                quadTree2.bottomLeft
                if quadTree2.bottomLeft
                else Node(quadTree2.val, 1, None, None, None, None)
            ),
        )
        bottomRight = self.intersect(
            (
                quadTree1.bottomRight
                if quadTree1.bottomRight
                else Node(quadTree1.val, 1, None, None, None, None)
            ),
            (
                quadTree2.bottomRight
                if quadTree2.bottomRight
                else Node(quadTree2.val, 1, None, None, None, None)
            ),
        )
        isLeaf, val = 0, quadTree1.val or quadTree2.val
        children = [topLeft, topRight, bottomLeft, bottomRight]
        if all(child.isLeaf for child in children) and sum(
            child.val for child in children
        ) in set([0, 4]):
            isLeaf = 1
            val = children[0].val
        return (
            Node(val, isLeaf, None, None, None, None)
            if isLeaf
            else Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight)
        )
