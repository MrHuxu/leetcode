import heapq
from typing import List


class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        ret = 0
        heapq.heapify(nums)
        while nums:
            x = heapq.heappop(nums)
            if not nums or x >= k:
                break
            y = heapq.heappop(nums)
            heapq.heappush(nums, min(x, y) * 2 + max(x, y))
            ret += 1
        return ret


print(Solution().minOperations(nums=[2, 11, 10, 1, 3], k=10))
print(Solution().minOperations(nums=[1, 1, 2, 4, 9], k=20))
