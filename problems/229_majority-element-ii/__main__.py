class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        candidate1, cnt1, candidate2, cnt2 = None, 0, None, 0
        for num in nums:
            if num == candidate1:
                cnt1 += 1
            elif num == candidate2:
                cnt2 += 1
            elif candidate1 is None or cnt1 == 0:
                candidate1 = num
                cnt1 += 1
            elif candidate2 is None or cnt2 == 0:
                candidate2 = num
                cnt2 += 1
            else:
                cnt1 -= 1
                cnt2 -= 1

        cnt1, cnt2 = 0, 0
        for num in nums:
            if num == candidate1:
                cnt1 += 1
            elif num == candidate2:
                cnt2 += 1

        n, ret = len(nums) / 3, []
        if cnt1 > n:
            ret.append(candidate1)
        if cnt2 > n:
            ret.append(candidate2)

        return ret
