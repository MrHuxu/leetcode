class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        remaining = maxCost
        ret, curr, pre_idx = 0, 0, -1
        for i, ch in enumerate(zip(s, t)):
            ch_s, ch_t = ch
            diff = abs(ord(ch_s) - ord(ch_t))
            if diff <= remaining:
                remaining -= diff
                if pre_idx == -1:
                    pre_idx = i
                ret = max(ret, i - pre_idx + 1)
                continue
            if pre_idx == -1:
                continue
            if diff > maxCost:
                pre_idx = -1
                remaining = maxCost
                continue
            while diff > remaining and pre_idx < i:
                remaining += abs(ord(s[pre_idx]) - ord(t[pre_idx]))
                pre_idx += 1
            remaining -= diff
        return ret
