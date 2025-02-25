MOD = 10**9 + 7


class Solution:
    def countVowelPermutation(self, n: int) -> int:
        cnt = [1] * 5
        for i in range(n - 1):
            c1, c2, c3, c4, c5 = cnt
            cnt[0] = (c2) % MOD
            cnt[1] = (c1 + c3) % MOD
            cnt[2] = (c1 + c2 + c4 + c5) % MOD
            cnt[3] = (c3 + c5) % MOD
            cnt[4] = (c1) % MOD

        return sum(cnt) % MOD


solution = Solution()
print(solution.countVowelPermutation(1))
print(solution.countVowelPermutation(2))
print(solution.countVowelPermutation(5))
