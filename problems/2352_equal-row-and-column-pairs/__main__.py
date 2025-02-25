import unittest
from typing import Dict, List


class Node:
    def __init__(self, val: int) -> None:
        self.val = val
        self.children: Dict[int, Node] = {}
        self.cnt = 0

    def addChild(self, val: int) -> None:
        self.children[val] = Node(val)

    def incrCnt(self) -> None:
        self.cnt += 1


class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        n = len(grid)
        root = Node(-1)
        for i in range(n):
            tmp = root
            for j in range(n):
                if grid[j][i] not in tmp.children:
                    tmp.addChild(grid[j][i])
                tmp = tmp.children[grid[j][i]]
            tmp.incrCnt()

        ret = 0
        for row in grid:
            tmp = root
            for val in row:
                tmp = (
                    tmp.children[val]
                    if tmp is not None and val in tmp.children
                    else None
                )
            ret += tmp.cnt if tmp is not None else 0
        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]), 1)
        self.assertEqual(
            solution.equalPairs(
                [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
            ),
            3,
        )
