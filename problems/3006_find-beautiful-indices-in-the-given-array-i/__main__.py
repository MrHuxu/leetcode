from typing import List


class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        ret = []
        for i in range(len(s) - len(a) + 1):
            if s[i : i + len(a)] != a:
                continue
            left_idx, right_idx = max(0, i - k), min(len(s), i + k + len(b))
            if b in s[left_idx:right_idx]:
                ret.append(i)
        return ret


solution = Solution()
assert solution.beautifulIndices(
    s="isawsquirrelnearmysquirrelhouseohmy", a="my", b="squirrel", k=15
) == [16, 33]
assert solution.beautifulIndices(s="abcd", a="a", b="a", k=4) == [0]
