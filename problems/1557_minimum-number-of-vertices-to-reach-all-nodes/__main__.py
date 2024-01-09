from typing import List


class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        inDegree = {i: 0 for i in range(n)}
        for edge in edges:
            inDegree[edge[1]] += 1
        ret: List[int] = []
        for i in range(n):
            if inDegree[i] == 0:
                ret.append(i)
        return ret
