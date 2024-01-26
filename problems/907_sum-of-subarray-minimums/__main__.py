from typing import List, Tuple

MOD = 10**9 + 7


class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        ret = 0
        pre_sum = 0
        stack: List[Tuple[int, int]] = []
        for num in arr:
            cnt = 1
            while stack and stack[-1][0] >= num:
                n, c = stack.pop()
                cnt += c
                pre_sum -= n * c
            stack.append((num, cnt))
            pre_sum += num * cnt
            ret = (ret + pre_sum) % MOD
        return ret


solution = Solution()
assert solution.sumSubarrayMins([3, 1, 2, 4]) == 17
assert solution.sumSubarrayMins([11, 81, 94, 43, 3]) == 444
