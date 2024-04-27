class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        mem = {}
        for ch in s:
            curr, cnt = ord(ch), 1
            for i in range(max(ord("a"), curr - k), min(ord("z"), curr + k) + 1):
                cnt = max(cnt, mem.get(i, 0) + 1)
            mem[curr] = cnt
        return max(mem.values())
