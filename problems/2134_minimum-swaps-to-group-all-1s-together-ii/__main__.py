from typing import List
from itertools import accumulate


class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        accu = list(accumulate(nums))
        cnt_1 = accu[-1]
        ret = n
        for i in range(n):
            j = i + cnt_1 - 1
            cnt = (
                cnt_1 - (accu[j] - (accu[i - 1] if i > 0 else 0))
                if j < n
                else cnt_1 - (cnt_1 - accu[i] + nums[i] + accu[j - n])
            )
            ret = min(ret, cnt)
        return ret


print(Solution().minSwaps([0, 1, 0, 1, 1, 0, 0]))
print(Solution().minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]))
print(Solution().minSwaps([1, 1, 0, 0, 1]))