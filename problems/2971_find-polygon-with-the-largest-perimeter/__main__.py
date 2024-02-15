class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        ret, pre_sum = -1, 0
        for num in nums:
            if pre_sum > num:
                ret = pre_sum + num
            pre_sum += num
        return ret
        