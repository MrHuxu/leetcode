from typing import List, Dict


class Solution:
    def findTheCity(
        self, n: int, edges: List[List[int]], distanceThreshold: int
    ) -> int:
        adj: Dict[int, Dict[int, int]] = {}
        for f, t, w in edges:
            adj.setdefault(f, {})[t] = w
            adj.setdefault(t, {})[f] = w
        cnt = {}
        for i in range(n):
            visited = {i: 0}
            queue = [i]
            while queue:
                f = queue.pop(0)
                for t, w in adj.get(f, {}).items():
                    if t in visited and w + visited[f] > visited[t]:
                        continue
                    if w + visited[f] > distanceThreshold:
                        continue
                    visited[t] = visited[f] + w
                    queue.append(t)
            cnt[i] = sum(1 for v in visited.values() if v <= distanceThreshold) - 1
        return -min((cnt[i], -i) for i in cnt)[1]


print(
    Solution().findTheCity(
        n=4, edges=[[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], distanceThreshold=4
    )
)
print(
    Solution().findTheCity(
        6, [[0, 1, 10], [0, 2, 1], [2, 3, 1], [1, 3, 1], [1, 4, 1], [4, 5, 10]], 20
    )
)
print(
    Solution().findTheCity(
        n=5,
        edges=[[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]],
        distanceThreshold=2,
    )
)