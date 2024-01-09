from typing import Dict, List


class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        graph: Dict[int, Dict[int, float]] = {i: {} for i in range(n)}
        for i, edge in enumerate(edges):
            graph[edge[0]][edge[1]] = succProb[i]
            graph[edge[1]][edge[0]] = succProb[i]

        dict: Dict[int, float] = {i: 1 if i == start else 0 for i in range(n)}
        while dict:
            changed = False

            for node1, prob1 in dict.items():
                for node2, prob2 in graph[node1].items():
                    next_prob = prob1 * prob2
                    if next_prob > dict.get(node2, 0):
                        dict[node2] = next_prob
                        changed = True

            if not changed:
                break

        return dict[end]


solution = Solution()
print(solution.maxProbability(n=3, edges=[[0, 1], [1, 2], [
      0, 2]], succProb=[0.5, 0.5, 0.2], start=0, end=2))
print(solution.maxProbability(n=3, edges=[[0, 1], [1, 2], [
      0, 2]], succProb=[0.5, 0.5, 0.3], start=0, end=2))
print(solution.maxProbability(n=3, edges=[[0, 1]], succProb=[
      0.5], start=0, end=2))
print(solution.maxProbability(5, [[1, 4], [2, 4], [0, 4], [0, 3], [
      0, 2], [2, 3]], [0.37, 0.17, 0.93, 0.23, 0.39, 0.04], 3, 4))
