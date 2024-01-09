from typing import List


class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        dp: List[List[int]] = [[1, 1] for _ in range(len(nums))]
        max_len = 1
        for i, num in enumerate(nums):
            for j in range(i):
                if nums[j] < num:
                    if dp[j][0] + 1 > dp[i][0]:
                        dp[i] = [dp[j][0] + 1, dp[j][1]]
                    elif dp[j][0] + 1 == dp[i][0]:
                        dp[i][1] += dp[j][1]
            max_len = max(max_len, dp[i][0])
        ret = 0
        for d in dp:
            if d[0] == max_len:
                ret += d[1]
        return ret


solution = Solution()
print(solution.findNumberOfLIS([1, 3, 5, 4, 7]))
print(solution.findNumberOfLIS([2, 2, 2, 2, 2]))
