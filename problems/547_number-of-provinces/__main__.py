import unittest
from typing import List, Set


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        ret = 0
        visited: Set[int] = set()
        for i in range(len(isConnected)):
            if i in visited:
                continue
            
            ret += 1
            self.dfs(i, visited, isConnected)
        return ret

    def dfs(self, start: int, visited: Set[int], isConnected: List[List[int]]):
        visited.add(start)
        for i in range(len(isConnected[start])):
            if isConnected[start][i] == 1 and i not in visited:
                self.dfs(i, visited, isConnected)

class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.findCircleNum([[1,1,0],[1,1,0],[0,0,1]]), 2)
        self.assertEqual(solution.findCircleNum([[1,0,0],[0,1,0],[0,0,1]]), 3)