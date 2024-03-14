class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        ret, pre_sum, cnt = 0, 0, {0: 1}
        for num in nums:
            pre_sum += num
            ret += cnt.get(pre_sum - goal, 0)
            cnt[pre_sum] = cnt.get(pre_sum, 0) + 1
        return ret
