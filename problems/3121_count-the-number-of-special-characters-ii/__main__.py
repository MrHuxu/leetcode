class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        result = [0] * 26
        for ch in word:
            if ord("a") <= ord(ch) <= ord("z"):
                idx = ord(ch) - ord("a")
                if result[idx] == 0:
                    result[idx] = 1
                elif result[idx] != 1:
                    result[idx] = 3
            else:
                idx = ord(ch) - ord("A")
                if result[idx] == 1:
                    result[idx] = 2
                elif result[idx] != 2:
                    result[idx] = 3
        return sum(1 for x in result if x == 2)


print(Solution().numberOfSpecialChars("aaAbcBC"))
print(Solution().numberOfSpecialChars("abc"))
print(Solution().numberOfSpecialChars("AbBCab"))
