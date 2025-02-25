class Solution:
    def maxScore(self, s: str) -> int:
        counter = collections.Counter(s)
        ret, cnt0, cnt1 = 0, 0, 0
        for i in range(len(s) - 1):
            if s[i] == "0":
                cnt0 += 1
            else:
                cnt1 += 1
            ret = max(ret, cnt0 + counter["1"] - cnt1)
        return ret
