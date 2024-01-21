class Solution:
    def minimumPushes(self, word: str) -> int:
        cnt = sorted(Counter(word).values(), key=lambda x: -x)
        ret, times = 0, 1
        while cnt:
            ret += sum(c * times for c in cnt[:8])
            cnt = cnt[8:]
            times += 1
        return ret