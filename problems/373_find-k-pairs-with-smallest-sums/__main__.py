import heapq
from typing import List, Tuple


class Pair(object):
    def __init__(self, idx1: int, idx2: int, sum: int):
        self.idx1 = idx1
        self.idx2 = idx2
        self.sum = sum

    def __lt__(self, other):
        return self.sum < other.sum


class Solution:
    def kSmallestPairs(
        self, nums1: List[int], nums2: List[int], k: int
    ) -> List[List[int]]:
        heap: List[Pair] = [Pair(i, 0, nums1[i] + nums2[0]) for i in range(len(nums1))]
        ret: List[List[int]] = []
        while len(ret) < k and heap:
            pair = heapq.heappop(heap)
            i, j = pair.idx1, pair.idx2
            ret.append([nums1[i], nums2[j]])
            if j + 1 < len(nums2):
                heapq.heappush(heap, Pair(i, j + 1, nums1[i] + nums2[j + 1]))
        return ret


solution = Solution()
print(solution.kSmallestPairs([1, 7, 11], [2, 4, 6], 3))
print(solution.kSmallestPairs([1, 1, 2], [1, 2, 3], 2))
print(solution.kSmallestPairs([1, 2], [3], 3))
print(solution.kSmallestPairs([1, 1, 2], [1, 2, 3], 10))
