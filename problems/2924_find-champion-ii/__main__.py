from typing import List


class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        indegree = {i: 0 for i in range(n)}
        adj = {i: [] for i in range(n)}
        for u, v in edges:
            indegree[v] += 1
            adj[u].append(v)

        no_indegree = [i for i in range(n) if not indegree[i]]
        if len(no_indegree) != 1:
            return -1

        queue = [no_indegree[0]]
        visited = set(queue)
        while queue:
            u = queue.pop(0)
            for v in adj[u]:
                if v in visited:
                    continue
                visited.add(v)
                queue.append(v)

        return no_indegree[0] if len(visited) == n else -1


print(Solution().findChampion(3, [[0, 1], [1, 2]]))
print(Solution().findChampion(n=4, edges=[[0, 2], [1, 3], [1, 2]]))
