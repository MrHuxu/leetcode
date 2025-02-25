from typing import List


class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned_set = set(banned)
        ret = 0
        for i in range(1, n + 1):
            if i in banned_set:
                continue
            if maxSum < i:
                break
            maxSum -= i
            ret += 1
        return ret


print(Solution().maxCount(banned=[1, 6, 5], n=5, maxSum=6))
print(Solution().maxCount(banned=[1, 2, 3, 4, 5, 6, 7], n=8, maxSum=1))
print(Solution().maxCount(banned=[11], n=7, maxSum=50))
