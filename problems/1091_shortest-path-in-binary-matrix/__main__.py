import unittest
from typing import List, Tuple


class Solution:
    directions: List[Tuple[int, int]] = [
        (-1, -1),
        (-1, 0),
        (-1, +1),
        (0, -1),
        (0, +1),
        (+1, -1),
        (+1, 0),
        (+1, +1),
    ]

    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        queue: List[Tuple[int, int, int]] = [(0, 0, 1)] if grid[0][0] == 0 else []
        while len(queue) > 0:
            x, y, step = queue.pop(0)
            if x == n - 1 and y == n - 1:
                return step
            for direction in self.directions:
                new_x, new_y = x + direction[0], y + direction[1]
                if self.validate(grid, new_x, new_y):
                    grid[new_x][new_y] = 1
                    queue.append((new_x, new_y, step + 1))

        return -1

    def validate(self, grid: List[List[int]], x: int, y: int) -> bool:
        return (
            x >= 0 and y >= 0 and x < len(grid) and y < len(grid[0]) and grid[x][y] == 0
        )


class TestSolution(unittest.TestCase):

    def test_shortestPathBinaryMatrix(self):
        grid = [[0, 1], [1, 0]]
        expected = 2
        actual = Solution().shortestPathBinaryMatrix(grid)
        self.assertEqual(expected, actual)

        grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
        expected = 4
        actual = Solution().shortestPathBinaryMatrix(grid)
        self.assertEqual(expected, actual)

        grid = [[1, 1, 0], [1, 1, 0], [0, 0, 0]]
        expected = -1
        actual = Solution().shortestPathBinaryMatrix(grid)
        self.assertEqual(expected, actual)

        grid = [
            [0, 1, 1, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 0],
        ]
        self.assertEqual(14, Solution().shortestPathBinaryMatrix(grid))

        self.assertEqual(Solution().shortestPathBinaryMatrix([[0]]), 1)
