from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if not nums:
            return 0

        left, right, sum = 0, 0, nums[0]
        ret = len(nums) + 1

        while right < len(nums):
            if sum < target:
                right += 1
                sum += nums[right] if right < len(nums) else 0
                continue
            elif sum >= target:
                ret = min(ret, right - left + 1)
                sum -= nums[left]
                left += 1

        return ret if ret != len(nums) + 1 else 0


solution = Solution()
print(solution.minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
print(solution.minSubArrayLen(4, [1, 4, 4]))
print(solution.minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
print(solution.minSubArrayLen(15, [1, 2, 3, 4, 5]))
