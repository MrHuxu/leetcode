import heapq
from typing import List

DIRECTIONS = [(0, 1), (0, -1), (1, 0), (-1, 0)]


class Solution:
    def minimumTime(self, grid: List[List[int]]) -> int:
        if grid[0][0] or (grid[0][1] > 1 and grid[1][0] > 1):
            return -1

        m, n = len(grid), len(grid[0])
        queue = [(0, 0, 0)]
        heapq.heapify(queue)
        visited = set()
        while queue:
            time, x, y = heapq.heappop(queue)
            if x == m - 1 and y == n - 1:
                return time

            if (x, y) in visited:
                continue
            visited.add((x, y))

            for dx, dy in DIRECTIONS:
                nx, ny = x + dx, y + dy

                if 0 <= nx < m and 0 <= ny < n and (nx, ny) not in visited:
                    diff = grid[nx][ny] - time
                    new_time = time + 1 if diff <= 1 else time + 1 + (diff // 2) * 2
                    heapq.heappush(queue, (new_time, nx, ny))

        return -1


print(Solution().minimumTime(grid=[[0, 2, 4], [3, 2, 1], [1, 0, 4]]))
print(Solution().minimumTime(grid=[[0, 1, 3, 2], [5, 1, 2, 5], [4, 3, 8, 6]]))
