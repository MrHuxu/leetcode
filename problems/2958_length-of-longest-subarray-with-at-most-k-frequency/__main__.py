class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        ret = 0
        cnt = {}
        left, right = 0, 0
        while right < len(nums):
            cnt[nums[right]] = cnt.get(nums[right], 0) + 1
            while cnt[nums[right]] > k:
                cnt[nums[left]] -= 1
                left += 1
            ret = max(ret, right - left + 1)
            right += 1
        return ret
