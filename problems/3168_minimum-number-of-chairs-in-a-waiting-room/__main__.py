class Solution:
    def minimumChairs(self, s: str) -> int:
        ret, curr = 0, 0
        for ch in s:
            curr += 1 if ch == "E" else -1
            ret = max(ret, curr)
        return ret


print(Solution().minimumChairs("EEEEEEE"))
print(Solution().minimumChairs("ELELEEL"))
print(Solution().minimumChairs("ELEELEELLL"))
print(Solution().minimumChairs("EEEEEEE"))
