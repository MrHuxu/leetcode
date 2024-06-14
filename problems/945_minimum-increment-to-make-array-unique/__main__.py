class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        ret = 0
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                continue
            ret += nums[i - 1] - nums[i] + 1
            nums[i] = nums[i - 1] + 1
        return ret
