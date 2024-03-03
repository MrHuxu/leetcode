from functools import cache
from typing import List


class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        s = sum(matchsticks)
        if s % 4 != 0:
            return False
        self.edge = s // 4
        self.matchsticks = matchsticks
        self.matchsticks.sort(reverse=True)
        return self.dfs(0, 0, 0, 0, 0)

    @cache
    def dfs(self, edge1: int, edge2: int, edge3: int, edge4: int, idx: int) -> bool:
        if self.edge == edge1 and edge1 == edge2 and edge2 == edge3 and edge3 == edge4:
            return True
        if (
            edge1 > self.edge
            or edge2 > self.edge
            or edge3 > self.edge
            or edge4 > self.edge
        ):
            return False
        return any(
            [
                self.dfs(edge1 + self.matchsticks[idx], edge2, edge3, edge4, idx + 1),
                self.dfs(edge1, edge2 + self.matchsticks[idx], edge3, edge4, idx + 1),
                self.dfs(edge1, edge2, edge3 + self.matchsticks[idx], edge4, idx + 1),
                self.dfs(edge1, edge2, edge3, edge4 + self.matchsticks[idx], idx + 1),
            ]
        )


print(Solution().makesquare([3, 3, 3, 3, 4]))
