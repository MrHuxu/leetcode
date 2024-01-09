from typing import List


class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        ret = 0
        left, right, incr_times = 0, 0, 0
        while right < len(nums):
            if incr_times <= k:
                ret = max(ret, right - left + 1)
                right += 1
                if right < len(nums):
                    incr_times += (nums[right] - nums[right - 1]) * (right - left)
            else:
                while incr_times > k:
                    incr_times -= nums[right] - nums[left]
                    left += 1
        return ret

solution = Solution()
print(solution.maxFrequency([1,2,4], 5))
print(solution.maxFrequency(nums = [1,4,8,13], k = 5))
print(solution.maxFrequency(nums = [3,9,6], k = 2))
