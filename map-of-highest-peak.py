from typing import List

DIRECTIONS = [(0, 1), (0, -1), (1, 0), (-1, 0)]


class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m, n = len(isWater), len(isWater[0])
        ret = [[0] * n for _ in range(m)]
        visited = [[False] * n for _ in range(m)]
        nodes = []
        for i in range(m):
            for j in range(n):
                if isWater[i][j]:
                    nodes.append((i, j, 0))
                    visited[i][j] = True
                else:
                    ret[i][j] = 1
        while nodes:
            i, j, height = nodes.pop(0)
            for dx, dy in DIRECTIONS:
                ni, nj = i + dx, j + dy
                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]:
                    visited[ni][nj] = True
                    ret[ni][nj] = height + 1
                    nodes.append((ni, nj, height + 1))
        return ret


print(Solution().highestPeak([[0, 1], [0, 0]]))
print(Solution().highestPeak([[0, 0, 1], [1, 0, 0], [0, 0, 0]]))
