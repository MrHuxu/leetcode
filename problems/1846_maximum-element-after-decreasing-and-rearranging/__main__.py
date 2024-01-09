from typing import List


class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        ret = 0
        for num in sorted(arr):
            if num > ret:
                ret += 1
        return ret


solution = Solution()
print(solution.maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1]))
print(solution.maximumElementAfterDecrementingAndRearranging([1, 10, 100]))
