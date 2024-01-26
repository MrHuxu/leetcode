from typing import List


class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        in_direction: List[List[int]] = [list() for _ in range(len(graph))]
        for i in range(len(graph)):
            for j in graph[i]:
                in_direction[j].append(i)
        out_degree: List[int] = [len(graph[i]) for i in range(len(graph))]

        ret: List[int] = []
        queue: List[int] = [i for i in range(len(graph)) if out_degree[i] == 0]
        while queue:
            node = queue.pop(0)
            ret.append(node)
            for i in in_direction[node]:
                out_degree[i] -= 1
                if out_degree[i] == 0:
                    queue.append(i)
        ret.sort()
        return ret


solution = Solution()
print(solution.eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]))
print(solution.eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]))
