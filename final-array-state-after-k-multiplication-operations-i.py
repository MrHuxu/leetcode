from typing import List
import heapq


class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        num_idx = [(num, i) for i, num in enumerate(nums)]
        heapq.heapify(num_idx)
        for _ in range(k):
            num, idx = heapq.heappop(num_idx)
            heapq.heappush(num_idx, (num * multiplier, idx))
        ret = [0] * len(nums)
        for num, idx in num_idx:
            ret[idx] = num
        return ret


print(Solution().getFinalState(nums=[2, 1, 3, 5, 6], k=5, multiplier=2))
print(Solution().getFinalState(nums=[1, 2], k=3, multiplier=4))
