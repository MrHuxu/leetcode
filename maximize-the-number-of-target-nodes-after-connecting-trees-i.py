from typing import List


class Solution:
    def maxTargetNodes(
        self, edges1: List[List[int]], edges2: List[List[int]], k: int
    ) -> List[int]:
        n, m = 0, 0
        adj1, adj2 = {}, {}
        for u, v in edges1:
            n = max(n, u + 1, v + 1)
            adj1.setdefault(u, []).append(v)
            adj1.setdefault(v, []).append(u)
        for u, v in edges2:
            m = max(m, u + 1, v + 1)
            adj2.setdefault(u, []).append(v)
            adj2.setdefault(v, []).append(u)

        cnt1, cnt2 = [0] * n, [0] * m
        for i in range(n):
            queue = [(i, 0)]
            visited = {i}
            while queue:
                u, d = queue.pop(0)
                if d > k:
                    break
                cnt1[i] += 1

                for v in adj1.get(u, []):
                    if v not in visited:
                        visited.add(v)
                        queue.append((v, d + 1))
        for i in range(m):
            queue = [(i, 0)]
            visited = {i}
            while queue:
                u, d = queue.pop(0)
                if d >= k:
                    break
                cnt2[i] += 1

                for v in adj2.get(u, []):
                    if v not in visited:
                        visited.add(v)
                        queue.append((v, d + 1))
        max2 = max(cnt2)
        return [c + max2 for c in cnt1]


print(
    Solution().maxTargetNodes(
        edges1=[[0, 1], [0, 2], [2, 3], [2, 4]],
        edges2=[[0, 1], [0, 2], [0, 3], [2, 7], [1, 4], [4, 5], [4, 6]],
        k=2,
    )
)

print(
    Solution().maxTargetNodes(
        edges1=[[0, 1], [0, 2], [0, 3], [0, 4]], edges2=[[0, 1], [1, 2], [2, 3]], k=1
    )
)

print(
    Solution().maxTargetNodes(
        [[2, 1], [7, 3], [0, 4], [7, 5], [2, 6], [0, 2], [0, 7]],
        [[3, 0], [1, 2], [5, 1], [6, 3], [9, 4], [5, 6], [7, 5], [9, 7], [8, 9]],
        7,
    )
)
