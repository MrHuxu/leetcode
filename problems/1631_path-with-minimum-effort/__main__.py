from typing import List

DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]]


class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        min_height, max_height = min(map(min, heights)), max(map(max, heights))

        low, high = 0, max_height - min_height
        while low < high:
            mid = (low + high) // 2
            visited: List[List[bool]] = [
                [False for _ in range(len(heights[0]))] for _ in range(len(heights))
            ]
            if self.dfs(mid, 0, 0, visited, heights):
                high = mid
            else:
                low = mid + 1
        return high

    def dfs(
        self,
        distance: int,
        i: int,
        j: int,
        visited: List[List[bool]],
        heights: List[List[int]],
    ) -> bool:
        if i == len(heights) - 1 and j == len(heights[0]) - 1:
            return True
        visited[i][j] = True

        ret = False
        for direction in DIRECTIONS:
            x, y = i + direction[0], j + direction[1]
            if x < 0 or x >= len(heights) or y < 0 or y >= len(heights[0]):
                continue
            if visited[x][y] or abs(heights[x][y] - heights[i][j]) > distance:
                continue

            ret = ret or self.dfs(distance, x, y, visited, heights)
            if ret:
                break
        return ret
