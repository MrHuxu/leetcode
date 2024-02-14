class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        pos_nums, neg_nums = [], []
        for num in nums:
            if num > 0:
                pos_nums.append(num)
            else:
                neg_nums.append(num)
        return [num for pair in zip(pos_nums, neg_nums) for num in pair]
