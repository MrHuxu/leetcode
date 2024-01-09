import unittest
from typing import Dict, List, Set


class Solution:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        total_visited: Dict[int, Set[int]] = {}
        ret = 1
        for i in range(len(bombs)):
            visited: Set[int] = set([i])
            self.dfs(bombs, i, visited, total_visited)
            total_visited[i] = visited
            ret = max(ret, len(visited))

        return ret

    def dfs(self, bombs: List[List[int]], current: int, visited: Set[int], total_visited: Dict[int, Set[int]]):
        for i in range(len(bombs)):
            if i == current or i in visited:
                continue

            x1, y1, _ = bombs[i]
            x2, y2, r2 = bombs[current]

            if (x1 - x2) ** 2 + (y1 - y2) ** 2 <= r2 ** 2:
                if i in total_visited:
                    visited.update(total_visited[i])
                else:
                    visited.add(i)
                    self.dfs(bombs, i, visited, total_visited)


class TestSolution(unittest.TestCase):
    def test_solution(self):
        solution = Solution()
        self.assertEqual(solution.maximumDetonation(
            [[2, 1, 3], [6, 1, 4]]), 2)
        self.assertEqual(solution.maximumDetonation(
            [[1, 1, 5], [10, 10, 5]]), 1)
        self.assertEqual(solution.maximumDetonation(
            [[1, 2, 3], [2, 3, 1], [3, 4, 2], [4, 5, 3], [5, 6, 4]]), 5)
