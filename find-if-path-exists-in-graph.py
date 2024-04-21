class Solution:
    def validPath(
        self, n: int, edges: List[List[int]], source: int, destination: int
    ) -> bool:
        adj = {}
        for u, v in edges:
            adj.setdefault(u, []).append(v)
            adj.setdefault(v, []).append(u)
        queue, visited = [source], {source}
        while queue:
            node = queue.pop(0)
            if node == destination:
                return True
            for next in adj.get(node, []):
                if next not in visited:
                    visited.add(next)
                    queue.append(next)
        return False
