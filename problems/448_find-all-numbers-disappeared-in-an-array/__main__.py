class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for num in nums:
            while nums[num - 1] != num:
                nums[num - 1], num = num, nums[num - 1]
        return [i + 1 for i, num in enumerate(nums) if i + 1 != num]
