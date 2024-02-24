from typing import Dict, List, Set


class Solution:
    def findAllPeople(
        self, n: int, meetings: List[List[int]], firstPerson: int
    ) -> List[int]:
        ret: Set[int] = set([0, firstPerson])
        metting_times: Set[int] = set()
        adj: Dict[int, Dict[int, Set[int]]] = {}
        for p1, p2, time in meetings:
            metting_times.add(time)
            if time not in adj:
                adj[time] = {}
            adj[time].setdefault(p1, set()).add(p2)
            adj[time].setdefault(p2, set()).add(p1)
        # print(adj)
        for time in sorted(metting_times):
            visited: Set[int] = set()
            for p in adj[time]:
                if p in visited or p not in ret:
                    continue
                self.dfs(p, adj[time], visited, ret)
        return list(ret)

    def dfs(
        self, start: int, adj: Dict[int, Set[int]], visited: Set[int], ret: Set[int]
    ):
        visited.add(start)
        for n in adj[start]:
            ret.add(n)
            if n not in visited:
                self.dfs(n, adj, visited, ret)


solution = Solution()
print(
    solution.findAllPeople(
        n=6, meetings=[[1, 2, 5], [2, 3, 8], [1, 5, 10]], firstPerson=1
    )
)
print(
    solution.findAllPeople(
        n=4, meetings=[[3, 1, 3], [1, 2, 2], [0, 3, 3]], firstPerson=3
    )
)
print(
    solution.findAllPeople(
        n=5, meetings=[[3, 4, 2], [1, 2, 1], [2, 3, 1]], firstPerson=1
    )
)
print(solution.findAllPeople(5, [[1, 4, 3], [0, 4, 3]], 3))
