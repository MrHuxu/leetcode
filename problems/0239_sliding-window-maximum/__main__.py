from heapq import heappop, heappush
from typing import List, Tuple


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        ret: List[int] = []
        heap: List[Tuple[int, int]] = []
        for i in range(len(nums)):
            top_max = -100000
            while heap:
                val, pos = heappop(heap)
                if pos >= (i - k +1):
                    top_max = -val
                    heappush(heap, (val, pos))
                    break
            max_val = max(top_max, nums[i])
            heappush(heap, (-nums[i], i))
            ret.append(max_val)
        return ret[k - 1:]

solution = Solution()
print(solution.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))