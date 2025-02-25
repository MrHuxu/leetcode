class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        i, j = 0, 0
        while True:
            if j == len(str2):
                return True
            if i == len(str1):
                return False

            if (
                str1[i] == str2[j]
                or (str1[i] == "z" and str2[j] == "a")
                or (ord(str1[i]) + 1 == ord(str2[j]))
            ):
                j += 1
            i += 1


print(Solution().canMakeSubsequence(str1="abc", str2="ad"))
print(Solution().canMakeSubsequence(str1="zc", str2="ad"))
print(Solution().canMakeSubsequence(str1="ab", str2="d"))
