from typing import List, Dict
import unittest


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        idxDiv: Dict[int, int] = {}
        for i in range(n):
            if i not in idxDiv and len(graph[i]) > 0:
                if not self.dfs(i, 0, idxDiv, graph):
                    return False
        return True

    def dfs(
        self, idx: int, div: int, idxDiv: Dict[int, int], graph: List[List[int]]
    ) -> bool:
        if idx in idxDiv and idxDiv[idx] != div:
            return False

        ret = True
        idxDiv[idx] = div
        for nextIdx in graph[idx]:
            if nextIdx in idxDiv:
                if idxDiv[nextIdx] == div:
                    ret = False
                    break
            else:
                ret = ret and self.dfs(nextIdx, div ^ 1, idxDiv, graph)

        return ret


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertTrue(solution.isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))
