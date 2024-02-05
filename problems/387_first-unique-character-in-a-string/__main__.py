class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = Counter(s)
        for i, ch in enumerate(s):
            if counter[ch] == 1:
                return i
        return -1