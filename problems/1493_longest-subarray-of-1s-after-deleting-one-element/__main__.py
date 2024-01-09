from typing import List


class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        cnt: List[int] = []
        has_0, has_1 = False, False
        for num in nums:
            if num == 1:
                has_1 = True
                if not cnt or cnt[-1] < 0:
                    cnt.append(1)
                else:
                    cnt[-1] += 1
            else:
                has_0 = True
                if not cnt or cnt[-1] > 0:
                    cnt.append(-1)
                else:
                    cnt[-1] -= 1

        ret = 0
        for i, c in enumerate(cnt):
            if c > 0:
                ret = max(ret, c)
            elif c == -1:
                ret = max(ret, (cnt[i - 1] if i > 0 else 0) +
                          (cnt[i + 1] if i < len(cnt) - 1 else 0))
        if not has_1:
            return 0
        if has_0:
            return ret
        return ret - 1


solution = Solution()
print(solution.longestSubarray([1, 1, 0, 1]))
print(solution.longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
print(solution.longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]))
print(solution.longestSubarray([1, 1, 1]))
print(solution.longestSubarray([0, 0, 0]))
print(solution.longestSubarray([1, 0, 0, 0]))
