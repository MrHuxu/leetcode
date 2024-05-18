from typing import List


class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        return sum(
            max(h - i, 0) for i, h in enumerate(sorted(happiness, reverse=True)[:k])
        )


print(Solution().maximumHappinessSum([1, 2, 3], 2))
print(Solution().maximumHappinessSum([1, 1, 1, 1], 2))
print(Solution().maximumHappinessSum([2, 3, 4, 5], 1))
print(Solution().maximumHappinessSum([12, 1, 42], 3))
