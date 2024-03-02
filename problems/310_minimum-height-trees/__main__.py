class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        nodes = set(list(i for i in range(n)))
        in_degree = {i: 0 for i in range(n)}
        adj = {i: [] for i in range(n)}
        for a, b in edges:
            in_degree[a] += 1
            in_degree[b] += 1
            adj[a].append(b)
            adj[b].append(a)
        # print(in_degree, adj)
        while len(nodes) > 2:
            need_to_remove = set([n for n in nodes if in_degree[n] == 1])
            nodes -= need_to_remove
            for n in need_to_remove:
                for neighbor in adj[n]:
                    in_degree[neighbor] -= 1
        return list(nodes)
        