class Solution:
    def findSubstringInWraproundString(self, s: str) -> int:
        cnt = {ch: 0 for ch in "abcdefghijklmnopqrstuvwxyz"}
        dp = [0] * len(s)
        for i, ch in enumerate(s):
            if i == 0:
                dp[i] = 1
            else:
                prev_ch = s[i - 1]
                dp[i] = (
                    dp[i - 1] + 1
                    if (ch == "a" and prev_ch == "z") or (ord(ch) - ord(prev_ch) == 1)
                    else 1
                )
            cnt[ch] = max(dp[i], cnt[ch])
        return sum(cnt.values())
