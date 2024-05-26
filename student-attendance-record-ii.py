from functools import cache

MOD = 10**9 + 7


MOD = 10**9 + 7


class Solution:
    def checkRecord(self, n: int) -> int:
        mem = [{} for _ in range(n + 1)]

        def dfs(remaining: int, absent_cnt: int, late_cnt: int) -> int:
            if absent_cnt == 2:
                return 0
            if late_cnt == 3:
                return 0
            if remaining == 0:
                return 1

            if (absent_cnt, late_cnt) in mem[remaining]:
                return mem[remaining][(absent_cnt, late_cnt)]

            ret = (
                dfs(remaining - 1, absent_cnt, 0) % MOD
                + dfs(remaining - 1, absent_cnt + 1, 0) % MOD
                + dfs(remaining - 1, absent_cnt, late_cnt + 1) % MOD
            ) % MOD
            mem[remaining][(absent_cnt, late_cnt)] = ret
            return ret

        return dfs(n, 0, 0)


print(Solution().checkRecord(1))
print(Solution().checkRecord(2))
print(Solution().checkRecord(3))
# print(Solution().checkRecord(10101))
