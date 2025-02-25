from typing import Dict, List, Optional, Set


class TreeNode:
    def __init__(self, x):
        self.val: int = x
        self.left: Optional[TreeNode] = None
        self.right: Optional[TreeNode] = None


class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        adjacent: Dict[int, List[int]] = {}
        visited: Set[int] = set()
        ret = []

        def buildGraph(node: TreeNode):
            if node.left:
                adjacent.setdefault(node.val, []).append(node.left.val)
                adjacent.setdefault(node.left.val, []).append(node.val)
                buildGraph(node.left)
            if node.right:
                adjacent.setdefault(node.val, []).append(node.right.val)
                adjacent.setdefault(node.right.val, []).append(node.val)
                buildGraph(node.right)

        buildGraph(root)

        def dfs(val: int, distance: int):
            if distance < k:
                visited.add(val)
                for neighbor in adjacent.get(val, []):
                    if neighbor not in visited:
                        dfs(neighbor, distance + 1)
            else:
                ret.append(val)

        dfs(target.val, 0)

        return ret


node0 = TreeNode(0)
node1 = TreeNode(1)
node2 = TreeNode(2)
node3 = TreeNode(3)
node4 = TreeNode(4)
node5 = TreeNode(5)
node6 = TreeNode(6)
node7 = TreeNode(7)
node8 = TreeNode(8)
node3.left = node5
node3.right = node1
node5.left = node6
node5.right = node2
node2.left = node7
node2.right = node4
node1.left = node0
node1.right = node8
print(Solution().distanceK(node3, node5, 2))

node1 = TreeNode(1)
print(Solution().distanceK(node1, node1, 3))
