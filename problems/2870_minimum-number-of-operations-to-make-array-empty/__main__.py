class Solution:
    def minOperations(self, nums: List[int]) -> int:
        ret = 0
        for cnt in Counter(nums).values():
            if cnt < 2:
                return -1
            ret += cnt // 3 + (0 if cnt % 3 == 0 else 1)
        return ret
