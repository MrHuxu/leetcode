from typing import List, Set


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        sets: List[Set[str]] = []
        for s in [set(a) for a in arr if len(set(a)) == len(a)]:
            sets += [ss | s for ss in sets if not ss & s] + [s]
        return max(len(s) for s in sets) if sets else 0


solution = Solution()
print(solution.maxLength(["aa", "bb"]))
print(solution.maxLength(["un", "iq", "ue"]))
print(solution.maxLength(arr=["cha", "r", "act", "ers"]))
print(solution.maxLength(arr=["abcdefghijklmnopqrstuvwxyz"]))
print(solution.maxLength(["ab", "cd", "cde", "cdef", "efg", "fgh", "abxyz"]))
print(solution.maxLength(["yxa", "svub", "jtrx", "ltrhqeyukanpfdbz"]))
