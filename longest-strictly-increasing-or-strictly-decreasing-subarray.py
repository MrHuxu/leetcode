class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        ret, incr_cnt, decr_cnt = 1, 1, 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                incr_cnt += 1
                decr_cnt = 1
            elif nums[i] < nums[i - 1]:
                decr_cnt += 1
                incr_cnt = 1
            else:
                incr_cnt = decr_cnt = 1
            ret = max(ret, incr_cnt, decr_cnt)
        return ret


print(Solution().longestMonotonicSubarray([1, 2, 3, 4, 5]))
print(Solution().longestMonotonicSubarray([1, 4, 3, 3, 2]))
print(Solution().longestMonotonicSubarray([3, 3, 3, 3]))
print(Solution().longestMonotonicSubarray([3, 2, 1]))
print(Solution().longestMonotonicSubarray([3, 2, 3]))
