class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        ret, left, right, curr = 0, 0, 0, 1
        while right < len(nums):
            curr *= nums[right]
            while curr >= k:
                curr //= nums[left]
                left += 1
            ret += right - left + 1
            right += 1
        return ret
