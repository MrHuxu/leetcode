class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if not s:
            return True

        idx_s = 0
        for ch in t:
            if ch == s[idx_s]:
                idx_s += 1

                if idx_s == len(s):
                    return True

        return False


solution = Solution()
print(solution.isSubsequence("abc", "ahbgdc"))
print(solution.isSubsequence("axc", "ahbgdc"))
print(solution.isSubsequence("", "abhgdc"))
