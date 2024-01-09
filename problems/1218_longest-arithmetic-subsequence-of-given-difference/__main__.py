from typing import Dict, List


class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        ret = 0
        dp: Dict[int, int] = {}
        for num in arr:
            dp[num] = dp.get(num - difference, 0) + 1
            ret = max(ret, dp[num])
        return ret


solution = Solution()
print(solution.longestSubsequence([1, 2, 3, 4], 1))
print(solution.longestSubsequence([1, 3, 5, 7], 1))
