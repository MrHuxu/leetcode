from typing import List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        out_direction: List[List[int]] = [[] for _ in range(numCourses)]
        in_degree = [0] * numCourses
        for prerequisite in prerequisites:
            in_degree[prerequisite[0]] += 1
            out_direction[prerequisite[1]].append(prerequisite[0])

        queue = [i for i in range(numCourses) if in_degree[i] == 0]
        cnt = 0
        while queue:
            cnt += 1

            course = queue.pop(0)
            for next_course in out_direction[course]:
                in_degree[next_course] -= 1
                if in_degree[next_course] == 0:
                    queue.append(next_course)
        return cnt == numCourses and cnt != 0


solution = Solution()
print(solution.canFinish(2, [[1, 0]]))
print(solution.canFinish(numCourses=2, prerequisites=[[1, 0], [0, 1]]))
