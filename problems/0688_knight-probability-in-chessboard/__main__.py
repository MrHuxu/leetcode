from typing import List, Tuple

DIRECTIONS = [
    (1, -2),
    (2, -1),
    (2, 1),
    (1, 2),
    (-1, 2),
    (-2, 1),
    (-2, -1),
    (-1, -2)
]


class Solution:
    dp: List[List[List[float]]]

    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        self.dp = [[[0] * (k + 1) for _ in range(n)] for _ in range(n)]
        return self.dfs(n, k, row, column)

    def dfs(self, n: int, k: int, row: int, column: int) -> float:
        if self.dp[row][column][k] > 0:
            return self.dp[row][column][k]
        if k == 0:
            return 1

        ret = 0
        for direction in DIRECTIONS:
            next_row = row + direction[0]
            next_column = column + direction[1]
            if 0 <= next_row < n and 0 <= next_column < n:
                ret += self.dfs(n, k - 1, next_row, next_column) / 8
        self.dp[row][column][k] = ret
        return ret


solution = Solution()
print(solution.knightProbability(3, 2, 0, 0))
print(solution.knightProbability(1, 0, 0, 0))
print(solution.knightProbability(8, 30, 6, 4))
