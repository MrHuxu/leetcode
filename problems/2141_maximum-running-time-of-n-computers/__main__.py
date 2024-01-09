from math import ceil
from typing import List


class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        left, right = 0, ceil(sum(batteries) / n + 1)
        while left < right:
            mid = (left + right) // 2
            if self.check(mid, n, batteries):
                left = mid + 1
            else:
                right = mid
        return left - 1

    def check(self, time: int, n: int, batteries: List[int]) -> bool:
        return sum(time if battery > time else battery for battery in batteries) / n >= time


solution = Solution()
print(solution.maxRunTime(2, [3, 3, 3]))
print(solution.maxRunTime(2, [1, 1, 1, 1]))
print(solution.maxRunTime(3, [10, 10, 3, 5]))
