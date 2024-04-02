from typing import List


class Solution:
    def countAlternatingSubarrays(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0] * n
        dp[0] = 1
        track_len = 1
        for i in range(1, n):
            if nums[i] == nums[i - 1]:
                dp[i] = dp[i - 1] + 1
                track_len = 1
            else:
                dp[i] = dp[i - 1] + track_len + 1
                track_len += 1
        return dp[-1]


print(Solution().countAlternatingSubarrays([0, 1, 1, 1]))
print(Solution().countAlternatingSubarrays([1, 0, 1, 0]))
