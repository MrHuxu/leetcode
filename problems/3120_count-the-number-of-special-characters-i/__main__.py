class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        ret = 0
        s = set([ord(ch) for ch in word])
        for i in range(ord("a"), ord("z") + 1):
            if i in s and (i + (ord("A") - ord("a"))) in s:
                ret += 1
        return ret


print(Solution().numberOfSpecialChars("aaAbcBC"))
print(Solution().numberOfSpecialChars("abc"))
print(Solution().numberOfSpecialChars("abBCab"))
