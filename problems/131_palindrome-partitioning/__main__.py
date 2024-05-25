from functools import cache
from typing import List


class Solution:
    def partition(self, s: str) -> List[List[str]]:

        @cache
        def isPalindrome(i: int, j: int) -> bool:
            while i < j:
                if s[i] != s[j]:
                    return False
                i, j = i + 1, j - 1
            return True

        @cache
        def helper(idx: int) -> List[List[str]]:
            if idx == len(s):
                return [[]]
            ret = []
            for i in range(idx, len(s)):
                if isPalindrome(idx, i):
                    ret.extend([s[idx : i + 1], *next_] for next_ in helper(i + 1))
            return ret

        return helper(0)


print(Solution().partition("aab"))