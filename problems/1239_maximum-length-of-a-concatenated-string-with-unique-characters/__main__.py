from typing import List, Set


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        sets: List[Set[str]] = []
        for s in arr:
            if len(s) != len(set(s)):
                continue
            tmp = set(s)
            for ss in sets:
                if not ss & tmp:
                    sets.append(ss | tmp)
            sets.append(tmp)
        return max(len(s) for s in sets) if sets else 0


solution = Solution()
print(solution.maxLength(["aa", "bb"]))
print(solution.maxLength(["un", "iq", "ue"]))
print(solution.maxLength(arr=["cha", "r", "act", "ers"]))
print(solution.maxLength(arr=["abcdefghijklmnopqrstuvwxyz"]))
print(solution.maxLength(["ab", "cd", "cde", "cdef", "efg", "fgh", "abxyz"]))
print(solution.maxLength(["yxa", "svub", "jtrx", "ltrhqeyukanpfdbz"]))
