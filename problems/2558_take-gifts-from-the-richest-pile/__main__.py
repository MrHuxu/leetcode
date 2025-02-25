import heapq
import math
from typing import List


class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        heap = [-gift for gift in gifts]
        heapq.heapify(heap)
        for _ in range(k):
            max_num = -heapq.heappop(heap)
            heapq.heappush(heap, -math.floor(math.sqrt(max_num)))
        return -sum(heap)


print(Solution().pickGifts(gifts=[25, 64, 9, 4, 100], k=4))
print(Solution().pickGifts(gifts=[1, 1, 1, 1], k=4))
