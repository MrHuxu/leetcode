from typing import List


class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        ret = 0
        max_sum, min_sum, curr_sum = 0, 0, 0
        for num in nums:
            curr_sum += num
            if curr_sum > 0:
                ret = (
                    max(ret, curr_sum - min_sum) if min_sum < 0 else max(ret, curr_sum)
                )
            elif curr_sum < 0:
                ret = (
                    max(ret, abs(curr_sum - max_sum))
                    if max_sum > 0
                    else max(ret, abs(curr_sum))
                )
            else:
                ret = max(ret, abs(max_sum), abs(min_sum))
            max_sum = max(max_sum, curr_sum)
            min_sum = min(min_sum, curr_sum)
        return ret


print(Solution().maxAbsoluteSum([1, -3, 2, 3, -4]))
print(Solution().maxAbsoluteSum([2, -5, 1, -4, 3, -2]))
