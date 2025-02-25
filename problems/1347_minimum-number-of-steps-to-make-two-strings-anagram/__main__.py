class Solution:
    def minSteps(self, s: str, t: str) -> int:
        ret = 0
        cnt_s, cnt_t = Counter(s), Counter(t)
        for ch in set(s + t):
            ret += abs(cnt_s.get(ch, 0) - cnt_t.get(ch, 0))
        return ret // 2
