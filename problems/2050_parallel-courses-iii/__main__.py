from collections import deque
from typing import Dict, List


class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        in_degrees: Dict[int, int] = {i + 1: 0 for i in range(n)}
        out_relations: Dict[int, List[int]] = {i + 1: [] for i in range(n)}
        for prev, next in relations:
            in_degrees[next] = in_degrees.get(next, 0) + 1
            out_relations.setdefault(prev, []).append(next)

        time_sum = [0] + time
        queue = deque([i for i in range(1, n + 1) if in_degrees[i] == 0])
        while queue:
            course = queue.popleft()
            for next_course in out_relations[course]:
                in_degrees[next_course] -= 1
                time_sum[next_course] = max(
                    time_sum[next_course], time_sum[course] + time[next_course - 1]
                )
                if in_degrees[next_course] == 0:
                    queue.append(next_course)
        return max(time_sum)


solution = Solution()
print(solution.minimumTime(n=3, relations=[[1, 3], [2, 3]], time=[3, 2, 5]))
print(
    solution.minimumTime(
        n=5, relations=[[1, 5], [2, 5], [3, 5], [3, 4], [4, 5]], time=[1, 2, 3, 4, 5]
    )
)
print(
    solution.minimumTime(
        9,
        [
            [2, 7],
            [2, 6],
            [3, 6],
            [4, 6],
            [7, 6],
            [2, 1],
            [3, 1],
            [4, 1],
            [6, 1],
            [7, 1],
            [3, 8],
            [5, 8],
            [7, 8],
            [1, 9],
            [2, 9],
            [6, 9],
            [7, 9],
        ],
        [9, 5, 9, 5, 8, 7, 7, 8, 4],
    )
)
