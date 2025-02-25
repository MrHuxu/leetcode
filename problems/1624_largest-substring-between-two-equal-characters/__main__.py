class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        ret = -1
        prev_idx = {}
        for i, ch in enumerate(s):
            if ch not in prev_idx:
                prev_idx[ch] = i
            else:
                ret = max(ret, i - prev_idx[ch] - 1)
        return ret
