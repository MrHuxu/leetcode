class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        visited = [[False] * n for _ in range(m)]
        ret, queue = 0, []
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "0" or visited[i][j]:
                    continue
                ret += 1
                queue.append((i, j))
                visited[i][j] = True
                while queue:
                    i2, j2 = queue.pop(0)
                    for x, y in [(0, -1), (-1, 0), (0, 1), (1, 0)]:
                        i3, j3 = i2 + x, j2 + y
                        if (
                            0 <= i3 < m
                            and 0 <= j3 < n
                            and grid[i3][j3] == "1"
                            and not visited[i3][j3]
                        ):
                            visited[i3][j3] = True
                            queue.append((i3, j3))
        return ret
