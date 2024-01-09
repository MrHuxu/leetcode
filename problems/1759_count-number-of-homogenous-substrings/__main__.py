MOD = 10**9 + 7


class Solution:
    def countHomogenous(self, s: str) -> int:
        ret = 0
        front_idx, tail_idx = 0, 0
        while tail_idx < len(s):
            if s[tail_idx] != s[front_idx]:
                ret += (tail_idx - front_idx) * (tail_idx - front_idx + 1) / 2 % MOD
                front_idx = tail_idx
            tail_idx += 1
        ret += (tail_idx - front_idx) * (tail_idx - front_idx + 1) / 2 % MOD
        return int(ret % MOD)


solution = Solution()
print(solution.countHomogenous("abbcccaa"))
print(solution.countHomogenous("xy"))
print(solution.countHomogenous("zzzzz"))
