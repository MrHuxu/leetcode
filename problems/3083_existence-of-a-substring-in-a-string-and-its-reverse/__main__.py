class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        set_s = set([s[i : i + 2] for i in range(len(s) - 1)])
        # print(set_s)
        rs = s[::-1]
        for i in range(len(s) - 1):
            if rs[i : i + 2] in set_s:
                return True
        return False


print(Solution().isSubstringPresent("leetcode"))
print(Solution().isSubstringPresent("abcba"))
print(Solution().isSubstringPresent("abcd"))
