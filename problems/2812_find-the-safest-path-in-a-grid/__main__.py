from typing import List, Tuple

DIRECTIONS = [(-1, 0), (1, 0), (0, -1), (0, 1)]


class Solution:
    def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        queue: List[Tuple[int, int, int]] = []
        distances = [[-1] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if grid[i][j]:
                    queue.append((i, j, 0))
                    distances[i][j] = 0
        while queue:
            i, j, distance = queue.pop(0)
            for di, dj in DIRECTIONS:
                ii, jj = i + di, j + dj
                if 0 <= ii < m and 0 <= jj < n and distances[ii][jj] == -1:
                    queue.append((ii, jj, distance + 1))
                    distances[ii][jj] = distance + 1
        # print(distances)
        min_distances = [[-1] * n for _ in range(m)]
        min_distances[0][0] = distances[0][0]
        queue: List[Tuple[int, int]] = [(0, 0)]
        while queue:
            i, j = queue.pop(0)
            for di, dj in DIRECTIONS:
                ii, jj = i + di, j + dj
                if not (0 <= ii < m and 0 <= jj < n):
                    continue
                curr = min(min_distances[i][j], distances[ii][jj])
                if min_distances[ii][jj] == -1 or curr > min_distances[ii][jj]:
                    min_distances[ii][jj] = curr
                    queue.append((ii, jj))
        return min_distances[-1][-1]


print(Solution().maximumSafenessFactor([[1, 0, 0], [0, 0, 0], [0, 0, 1]]))
print(Solution().maximumSafenessFactor([[0, 0, 1], [0, 0, 0], [0, 0, 0]]))
print(
    Solution().maximumSafenessFactor(
        [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0]]
    )
)
