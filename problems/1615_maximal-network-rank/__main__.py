from typing import List


class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        adj = [[] for _ in range(n)]
        for road in roads:
            a, b = road
            adj[a].append(b)
            adj[b].append(a)
        ret = 0
        for i in range(n):
            for j in range(i + 1, n):
                ret = max(ret, len(adj[i]) + len(adj[j]) - (1 if i in adj[j] else 0))
        return ret

solution = Solution()
print(solution.maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]]))
print(solution.maximalNetworkRank(n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]))
print(solution.maximalNetworkRank(n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]))