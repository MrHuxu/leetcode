from itertools import accumulate

MOD = 10**9 + 7


class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        ret = [1] * n
        for _ in range(k):
            ret = list(accumulate(ret))
        return ret[-1] % MOD


print(Solution().valueAfterKSeconds(4, 5))
print(Solution().valueAfterKSeconds(5, 3))
print(Solution().valueAfterKSeconds(5, 1000))
