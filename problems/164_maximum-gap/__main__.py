class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0

        ret = 0
        nums.sort()
        for i in range(len(nums) - 1):
            ret = max(ret, nums[i + 1] - nums[i])
        return ret
