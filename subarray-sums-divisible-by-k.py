class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        ret = 0
        accu, remainder_cnt = 0, {}
        for num in nums:
            accu += num
            remainder = accu % k

            if not remainder:
                ret += 1

            if remainder in remainder_cnt:
                ret += remainder_cnt[remainder]
                remainder_cnt[remainder] += 1
            else:
                remainder_cnt[remainder] = 1
        return ret
