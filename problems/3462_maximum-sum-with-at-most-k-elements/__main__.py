from heapq import heapify, heappop, heappush
from typing import List


class Solution:
    def maxSum(self, grid: List[List[int]], limits: List[int], k: int) -> int:
        arr = []
        for i in range(len(grid)):
            arr.extend(sorted(grid[i], reverse=True)[: limits[i]])
        return sum(sorted(arr, reverse=True)[:k])


print(Solution().maxSum(grid=[[1, 2], [3, 4]], limits=[1, 2], k=2))
print(Solution().maxSum([[5, 3, 7], [8, 2, 6]], [2, 2], 3))
