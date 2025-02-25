from typing import Dict, List, Set


class Solution:
    def checkIfPrerequisite(
        self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]
    ) -> List[bool]:
        adj = [set() for _ in range(numCourses)]
        for u, v in prerequisites:
            adj[u].add(v)
        for i in range(numCourses):
            nodes = list(adj[i])
            while nodes:
                node = nodes.pop(0)
                for n in adj[node]:
                    if n not in adj[i]:
                        adj[i].add(n)
                        nodes.append(n)
        return [v in adj[u] for u, v in queries]


print(
    Solution().checkIfPrerequisite(
        numCourses=2, prerequisites=[[1, 0]], queries=[[0, 1], [1, 0]]
    )
)
print(
    Solution().checkIfPrerequisite(
        numCourses=2, prerequisites=[], queries=[[1, 0], [0, 1]]
    )
)
print(
    Solution().checkIfPrerequisite(
        numCourses=3, prerequisites=[[1, 2], [1, 0], [2, 0]], queries=[[1, 0], [1, 2]]
    )
)
print(
    Solution().checkIfPrerequisite(
        5,
        [[3, 4], [2, 3], [1, 2], [0, 1]],
        [[0, 4], [4, 0], [1, 3], [3, 0]],  # true, false, true, false
    )
)
print(
    Solution().checkIfPrerequisite(
        6, [[0, 5], [1, 2], [1, 4], [2, 3], [5, 1]], [[0, 3]]  # true
    )
)
