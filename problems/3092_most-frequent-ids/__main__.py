from heapq import heapify, heappop, heappush
from typing import List


class Solution:
    def mostFrequentIDs(self, nums: List[int], freq: List[int]) -> List[int]:
        ret = [0] * len(nums)
        cnt, heap = {}, []
        heapify(heap)
        for i, (n, f) in enumerate(zip(nums, freq)):
            cnt[n] = cnt.get(n, 0) + f
            heappush(heap, (-cnt[n], n))
            while heap and heap[0][0] != -cnt[heap[0][1]]:
                heappop(heap)
            if heap:
                ret[i] = -heap[0][0]
        return ret


print(Solution().mostFrequentIDs(nums=[2, 3, 2, 1], freq=[3, 2, -3, 1]))
print(Solution().mostFrequentIDs(nums=[5, 5, 3], freq=[2, -2, 1]))
