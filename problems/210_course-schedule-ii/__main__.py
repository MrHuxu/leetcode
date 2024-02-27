from typing import Dict, List


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        in_degree: Dict[int, int] = {}
        adj: Dict[int, List[int]] = {}
        for next, b in prerequisites:
            in_degree[next] = in_degree.get(next, 0) + 1
            adj[b] = adj.get(b, []) + [next]
        ret = [num for num in range(numCourses) if num not in in_degree]
        idx = 0
        while idx < len(ret):
            for next in adj.get(ret[idx], []):
                in_degree[next] -= 1
                if in_degree[next] == 0:
                    ret.append(next)
            idx += 1
        return ret if len(ret) == numCourses else []


solution = Solution()
print(solution.findOrder(2, [[1, 0]]))
print(solution.findOrder(numCourses=4, prerequisites=[[1, 0], [2, 0], [3, 1], [3, 2]]))
