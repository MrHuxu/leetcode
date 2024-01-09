from typing import List


class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        pre = 0
        for i in range(len(pref)):
            pref[i] = pre ^ pref[i]
            pre = pre ^ pref[i]
        return pref


solution = Solution()
print(solution.findArray([5, 2, 0, 3, 1]))
print(solution.findArray([13]))
