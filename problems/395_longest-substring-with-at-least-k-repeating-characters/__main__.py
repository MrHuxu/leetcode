class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        if len(s) < k:
            return 0
        cnt, ch = min((v, k) for k, v in Counter(s).items())
        return (
            len(s)
            if cnt >= k
            else max(self.longestSubstring(t, k) for t in s.split(ch))
        )
