from typing import List


class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        nums.sort()
        left, right = 0, nums[-1] - nums[0]
        while left < right:
            mid = (left + right) // 2
            if self.validate(mid, nums, p):
                right = mid
            else:
                left = mid + 1
        return left
        
    def validate(self, val: int, nums: List[int], p: int) -> bool:
        i, cnt = 0, 0
        while i < len(nums) - 1:
            if nums[i + 1] - nums[i] <= val:
                i += 1
                cnt += 1
            if cnt >= p:
                return True
            i += 1
        return False

solution = Solution()
print(solution.minimizeMax([10, 1, 2, 7, 1, 3], 2))
print(solution.minimizeMax([4, 2, 1, 2], 1))