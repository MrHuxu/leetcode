class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        accu, remainder_idx = 0, {0: -1}
        for i, num in enumerate(nums):
            accu += num
            remainder = accu % k
            if remainder in remainder_idx:
                if i - remainder_idx[remainder] >= 2:
                    return True
            else:
                remainder_idx[remainder] = i
        return False
