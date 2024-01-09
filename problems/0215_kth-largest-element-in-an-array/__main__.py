from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return sorted(nums, key=lambda x: -x)[k - 1]


solution = Solution()
print(solution.findKthLargest([3, 2, 1, 5, 6, 4], 2))
print(solution.findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
