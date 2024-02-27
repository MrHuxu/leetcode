from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        dp1, dp2 = [0] * n, [0] * n

        for i in range(1, n):
            if i == 1:
                dp1[i] = nums[i]
            elif i == 2:
                dp1[i] = max(nums[i], nums[i - 1])
            else:
                dp1[i] = max(dp1[i - 1], dp1[i - 2] + nums[i])

        for i in range(n):
            if i == 0:
                dp2[i] = nums[i]
            elif i == 1:
                dp2[i] = max(nums[i], nums[i - 1])
            elif i == n - 1:
                dp2[i] = dp2[i - 1]
            else:
                dp2[i] = max(dp2[i - 1], dp2[i - 2] + nums[i])

        return max(dp1[-1], dp2[-1])


solution = Solution()
print(solution.rob([2, 3, 2]))
print(solution.rob([1, 2, 3, 1]))
print(solution.rob([1, 2, 3]))
