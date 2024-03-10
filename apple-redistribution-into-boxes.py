from heapq import heapify, heappop
from typing import List


class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        ret, sum_apple = 0, sum(apple)
        capacity = [-c for c in capacity]
        heapify(capacity)
        while sum_apple > 0:
            ret += 1
            sum_apple -= -heappop(capacity)
        return ret


print(Solution().minimumBoxes(apple=[1, 3, 2], capacity=[4, 3, 1, 5, 2]))
print(Solution().minimumBoxes(apple=[5, 5, 5], capacity=[2, 4, 2, 7]))
