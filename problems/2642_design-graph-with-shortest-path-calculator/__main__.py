from typing import Dict, List, Tuple


class Graph:
    adj: Dict[int, Dict[int, int]]

    def __init__(self, n: int, edges: List[List[int]]):
        self.adj = {}
        for edge in edges:
            self.adj.setdefault(edge[0], {})[edge[1]] = edge[2]
        

    def addEdge(self, edge: List[int]) -> None:
        self.adj.setdefault(edge[0], {})[edge[1]] = edge[2]
        

    def shortestPath(self, node1: int, node2: int) -> int:
        if node1 == node2:
            return 0

        ret = -1
        queue: List[Tuple[int, int]] = [(node1, 0)]
        visited: Dict[int, int] = {}
        while queue:
            node, distance = queue.pop(0)
            if node not in self.adj:
                continue
            for neighbor, weight in self.adj[node].items():
                next_distance = distance + weight
                if neighbor == node2:
                    ret = min(ret, next_distance) if ret != -1 else next_distance
                if neighbor not in visited or visited[neighbor] > next_distance:
                    visited[neighbor] = next_distance
                    queue.append((neighbor, next_distance))
        return ret
        


# Your Graph object will be instantiated and called as such:
# obj = Graph(n, edges)
# obj.addEdge(edge)
# param_2 = obj.shortestPath(node1,node2)
graph = Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]])
print(graph.shortestPath(3, 2))
print(graph.shortestPath(0, 3))
graph.addEdge([1, 3, 4])
print(graph.shortestPath(0, 3))
