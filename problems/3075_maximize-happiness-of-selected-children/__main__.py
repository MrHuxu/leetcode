from heapq import heapify, heappop
from typing import List


class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        ret, decr = 0, 0
        happiness = [-h for h in happiness]
        heapify(happiness)
        while k > 0:
            m = -heappop(happiness)
            if m <= decr:
                break
            ret += m - decr
            k -= 1
            decr += 1
        return ret


print(Solution().maximumHappinessSum(happiness=[1, 2, 3], k=2))
print(Solution().maximumHappinessSum(happiness=[1, 1, 1, 1], k=2))
print(Solution().maximumHappinessSum(happiness=[2, 3, 4, 5], k=1))
