from typing import List


class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        ret = 0
        if len(nums2) % 2:
            for num in nums1:
                ret ^= num
        if len(nums1) % 2:
            for num in nums2:
                ret ^= num
        return ret


print(Solution().xorAllNums(nums1=[2, 1, 3], nums2=[10, 2, 5, 0]))
print(Solution().xorAllNums(nums1=[1, 2], nums2=[3, 4]))
