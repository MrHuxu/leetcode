class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        m, n = len(land), len(land[0])
        visited = [[False] * n for _ in range(m)]
        ret = []
        for i in range(m):
            for j in range(n):
                if land[i][j] == 0 or visited[i][j]:
                    continue
                item = [i, j, i, j]
                queue = [(i, j)]
                while queue:
                    ii, jj = queue.pop(0)
                    for x, y in [(0, 1), (1, 0)]:
                        iii, jjj = ii + x, jj + y
                        if not (
                            0 <= iii < m
                            and 0 <= jjj < n
                            and land[iii][jjj] == 1
                            and not visited[iii][jjj]
                        ):
                            continue
                        visited[iii][jjj] = True
                        queue.append((iii, jjj))
                        if iii + jjj > item[2] + item[3]:
                            item[2], item[3] = iii, jjj
                ret.append(item)
        return ret
