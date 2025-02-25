import math
from typing import List


class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        left, right = 0, max(
            max(dist), dist[-1] if hour % 1 == 0 else dist[-1] / (hour % 1) + 1
        )
        while left < right:
            mid = (left + right) // 2
            if mid != 0 and self.check(mid, dist, hour):
                right = mid
            else:
                left = mid + 1
        return int(left) if self.check(left, dist, hour) else -1

    def check(self, speed: int, dist: List[int], hour: float) -> bool:
        sum = float(0)
        for i, d in enumerate(dist):
            if i == len(dist) - 1:
                sum += d / speed
            else:
                sum += math.ceil(d / speed)
            if sum > hour:
                return False
        return True


solution = Solution()
print(solution.minSpeedOnTime([1, 3, 2], 6))
print(solution.minSpeedOnTime([1, 3, 2], 2.7))
print(solution.minSpeedOnTime([1, 3, 2], 1.9))
print(solution.minSpeedOnTime([1, 1, 100000], 2.01))
