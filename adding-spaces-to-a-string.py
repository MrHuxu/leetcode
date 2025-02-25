from typing import List


class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        spaces_set = set(spaces)
        return "".join(" " + c if i in spaces_set else c for i, c in enumerate(s))


print(Solution().addSpaces(s="LeetcodeHelpsMeLearn", spaces=[8, 13, 15]))
print(Solution().addSpaces(s="icodeinpython", spaces=[1, 5, 7, 9]))
print(Solution().addSpaces(s="spacing", spaces=[0, 1, 2, 3, 4, 5, 6]))
