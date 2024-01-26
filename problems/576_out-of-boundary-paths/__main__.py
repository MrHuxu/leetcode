from typing import Dict, List, Tuple

DIRECTIONS: List[Tuple[int, int]] = [(0, 1), (0, -1), (1, 0), (-1, 0)]


class Solution:
    def findPaths(
        self, m: int, n: int, maxMove: int, startRow: int, startColumn: int
    ) -> int:
        self.visited: Dict[Tuple[int, int, int], int] = {}
        return self.dfs(m, n, maxMove, startRow, startColumn)

    def dfs(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        if maxMove == 0:
            return 0

        if (startRow, startColumn, maxMove) in self.visited:
            return self.visited[(startRow, startColumn, maxMove)]

        self.visited[(startRow, startColumn, maxMove)] = 0
        for dx, dy in DIRECTIONS:
            x, y = startRow + dx, startColumn + dy
            if x < 0 or x >= m or y < 0 or y >= n:
                self.visited[(startRow, startColumn, maxMove)] += 1
            else:
                self.visited[(startRow, startColumn, maxMove)] += (
                    self.dfs(m, n, maxMove - 1, x, y) % 1000000007
                )

        return self.visited[(startRow, startColumn, maxMove)] % 1000000007


solution = Solution()
print(solution.findPaths(2, 2, 2, 0, 0))
print(solution.findPaths(1, 3, 3, 0, 1))
print(solution.findPaths(8, 6, 10, 4, 3))
