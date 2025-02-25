class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        cnt, ret = 0, 0
        for num in nums:
            if cnt == 0:
                ret = num

            if num == ret:
                cnt += 1
            else:
                cnt -= 1
        return ret

    def majorityElement2(self, nums: List[int]) -> int:
        return max(Counter(nums).items(), key=lambda x: x[1])[0]
