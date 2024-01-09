from typing import List


class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        duration = [dist[i] / speed[i] for i in range(len(dist))]
        duration.sort()
        ret = 0
        while duration and duration[0] > ret:
            duration.pop(0)
            ret += 1
        return ret


solution = Solution()
print(solution.eliminateMaximum([1, 3, 4], [1, 1, 1]))
print(solution.eliminateMaximum([3, 2, 4], [5, 2, 3]))
print(solution.eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]))
