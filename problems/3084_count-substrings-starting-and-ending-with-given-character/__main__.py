from collections import Counter


class Solution:
    def countSubstrings(self, s: str, c: str) -> int:
        cnt = Counter(s)[c]
        return (1 + cnt) * cnt // 2


print(Solution().countSubstrings("aa", "a"))
print(Solution().countSubstrings("abada", "a"))
print(Solution().countSubstrings("zzz", "z"))
