class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        ret = []
        for num in nums:
            idx = abs(num)
            if nums[idx - 1] < 0:
                ret.append(idx)
            nums[idx - 1] *= -1
        return ret
