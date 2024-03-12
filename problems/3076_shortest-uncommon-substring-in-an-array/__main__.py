from typing import List, Set


class Solution:
    def shortestSubstrings(self, arr: List[str]) -> List[str]:
        substrs = [self.getAllSubString(s) for s in arr]
        substr_sets = [set(s) for s in substrs]
        ret = [""] * len(arr)
        for i in range(len(arr)):
            for ss in substrs[i]:
                found = False
                for j in range(len(arr)):
                    if j == i:
                        continue
                    if ss in substr_sets[j]:
                        found = True
                        break
                if not found:
                    ret[i] = ss
                    break
        return ret

    def getAllSubString(self, s: str) -> List[str]:
        ret = []
        for i in range(len(s)):
            for j in range(i, len(s)):
                ret.append(s[i : j + 1])
        ret.sort(key=lambda x: (len(x), x))
        return ret


print(Solution().shortestSubstrings(arr=["cab", "ad", "bad", "c"]))
print(Solution().shortestSubstrings(arr=["abc", "bcd", "abcd"]))
