class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        ret, all_0 = 0, False
        while not all_0:
            all_0, cnt_0, cnt_1 = True, 0, 0
            for i, num in enumerate(nums):
                if num != 0:
                    all_0 = False
                cnt_0 += 1 if num & 1 == 0 else 0
                cnt_1 += 1 if num & 1 == 1 else 0
                nums[i] >>= 1
            ret += cnt_0 * cnt_1
        return ret
