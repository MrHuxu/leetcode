class Solution:
    def minimumPushes(self, word: str) -> int:
        ret, n, times = 0, len(word), 1
        while n > 0:
            ret += n * times
            n -= 8
        return ret