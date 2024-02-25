from typing import Counter, List


class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        return all(v <= 2 for v in Counter(nums).values())


solution = Solution()
print(solution.isPossibleToSplit([1, 1, 2, 2, 3, 4]))
print(solution.isPossibleToSplit([1, 1, 1, 1]))
