from typing import Dict, List, Set


class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        divisions: Dict[str, Dict[str, float]] = {}
        for equation, value in zip(equations, values):
            dividend, divisor = equation
            divisions.setdefault(dividend, {})[divisor] = value
            divisions.setdefault(divisor, {})[dividend] = 1 / value

        return [self.dfs(query[0], query[1], divisions, set()) for query in queries]

    def dfs(self, start: str, target: str, divisions: Dict[str, Dict[str, float]], visited: Set[str]) -> float:
        if start not in divisions:
            return -1
        if start == target:
            return 1
        visited.add(start)

        for (next, val) in divisions[start].items():
            if next not in visited:
                result = self.dfs(next, target, divisions, visited)
                if result != -1:
                    return result * val

        return -1
