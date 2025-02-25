class Solution:
    def minimumLength(self, s: str) -> int:
        ret, counter = len(s), {}
        for ch in s:
            counter[ch] = counter.get(ch, 0) + 1
            if counter[ch] == 3:
                counter[ch] -= 2
                ret -= 2
        return ret


print(Solution().minimumLength("abaacbcbb"))
print(Solution().minimumLength("aa"))
