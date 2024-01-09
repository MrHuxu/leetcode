class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        ret = 0
        for i in range(26):
            ch = chr(ord("a") + i)
            first_idx, last_idx = s.find(ch), s.rfind(ch)
            if not last_idx > first_idx:
                continue
            ret += len(set(s[first_idx + 1 : last_idx]))
        return ret


solution = Solution()
print(solution.countPalindromicSubsequence("aabca"))
print(solution.countPalindromicSubsequence("adc"))
print(solution.countPalindromicSubsequence("bbcbaba"))
