class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        ret, pre_sum = 0, 0
        sum_idx = {pre_sum: -1}
        for i, num in enumerate(nums):
            pre_sum += 1 if num else -1
            if pre_sum in sum_idx:
                ret = max(ret, i - sum_idx[pre_sum])
            else:
                sum_idx[pre_sum] = i
        return ret
