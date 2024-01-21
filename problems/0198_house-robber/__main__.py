class Solution:
    def rob(self, nums: List[int]) -> int:
        ret = 0
        for i, num in enumerate(nums):
            nums[i] = max(
                nums[i],
                nums[i - 1] if i > 0 else 0,
                num + nums[i - 2] if i > 1 else 0
            )
            ret = max(ret, nums[i])
        return ret
