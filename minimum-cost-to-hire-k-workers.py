import heapq
import math
from typing import List


class Solution:
    def mincostToHireWorkers(
        self, quality: List[int], wage: List[int], k: int
    ) -> float:
        ret = math.inf
        # 根据 w/q 排序, 那么遍历到一项的时候, 可以保证前面的项 w/q 都小于向前项, 可以被选择
        workers = sorted([(w / q, q) for q, w in zip(quality, wage)])
        worker_quality_sum = 0
        heap = []
        for ratio, q in workers:
            heapq.heappush(heap, -q)
            worker_quality_sum += q
            if len(heap) > k:
                worker_quality_sum += heapq.heappop(heap)
            if len(heap) == k:
                ret = min(ret, worker_quality_sum * ratio)
        return ret


print(Solution().mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2))
print(Solution().mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3))
