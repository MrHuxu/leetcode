from typing import List


class Solution:
    def shortestDistanceAfterQueries(
        self, n: int, queries: List[List[int]]
    ) -> List[int]:
        adj = {i: {i + 1} for i in range(n - 1)}

        ret = [n] * len(queries)
        for i, query in enumerate(queries):
            if i > 0 and ret[i - 1] == 1:
                ret[i] = 1
                continue

            u, v = query
            adj[u].add(v)

            queue = [(0, 0)]
            visited = {0}
            while queue:
                u, dist = queue.pop(0)
                for v in adj[u]:
                    if v in visited:
                        continue
                    visited.add(v)
                    if v == n - 1:
                        ret[i] = dist + 1
                        break
                    queue.append((v, dist + 1))
                if n - 1 in visited:
                    break
        return ret


print(Solution().shortestDistanceAfterQueries(n=5, queries=[[2, 4], [0, 2], [0, 4]]))
print(Solution().shortestDistanceAfterQueries(n=4, queries=[[0, 3], [0, 2]]))
